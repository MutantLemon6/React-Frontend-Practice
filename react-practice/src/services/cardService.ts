import type { ICard } from "../interfaces/card";
import type { CardFilters } from "../interfaces/card-filters";
import type { ICollectionCard } from "../interfaces/collection-card";
import { getSelectedColorCodes } from "../interfaces/color-filters";

const baseUrl = "http://localhost:5000/api/";

export async function updateCard(cardId: string | number, body: ICard) {
    const response = await fetch(`${baseUrl}cards/${cardId}`, {
        method: "PUT",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(body)
    });

    if(!response.ok){
      let errorMessage = `Error ${response.status}: ${response.statusText}`;
      try {
        const errorData = await response.json();
        if(errorData && errorData.detail) {
          errorMessage = errorData.detail;
        }
      }catch {
        console.log("Unable to parse Json")
      }
      throw new Error(errorMessage);
    }
    return await response.json();
}

export async function deleteCard(cardId: string | number) {
  const response = await fetch(`${baseUrl}cards/${cardId}`, {
    method: "DELETE",
  });

  if (!response.ok) throw response;
  return true;
}

export async function fetchCards(filters?: CardFilters, sortBy?:string) {
  const filtersToSend = {
    ...filters,
    color: getSelectedColorCodes(filters?.color ?? { white: false, blue: false, black: false, red: false, green: false, colorless: false }),
    colorIdentity: getSelectedColorCodes(filters?.colorIdentity ?? { white: false, blue: false, black: false, red: false, green: false, colorless: false })
  };

  const queryParams = new URLSearchParams();
  if(filtersToSend.name) queryParams.set("name", filtersToSend.name);
  if(filtersToSend.minCount) queryParams.set("minCount", filtersToSend.minCount.toString());
  if(filtersToSend.maxCount) queryParams.set("maxCount", filtersToSend.maxCount.toString());
  if(filtersToSend.color && Array.isArray(filtersToSend.color) && filtersToSend.color.length > 0) {
    queryParams.set("colors", filtersToSend.color.join(","));
  }
  if (
    filtersToSend.colorIdentity &&
    Array.isArray(filtersToSend.colorIdentity) &&
    filtersToSend.colorIdentity.length > 0
  ) {
    queryParams.set("colorIdentity", filtersToSend.colorIdentity.join(","));
  }

  if(sortBy) queryParams.set("sortBy", sortBy);
  console.log(`${baseUrl}cards?${queryParams.toString()}`)
  const response = await fetch(`${baseUrl}cards?${queryParams.toString()}`);
  if (!response.ok) {
    throw new Error(`Failed to fetch cards: ${response.status} ${response.statusText}`);
  }

  const data: ICollectionCard[] = await response.json();
  return data;
}

export async function fetchCardsfromScryfall(name: string) {
  const response = await fetch(`${baseUrl}scryfall/cards?name=${encodeURIComponent(name)}`);
  if(!response.ok) throw response;
  return await response.json();  
}

export async function addCards(cards: ICard[]) {
  const response = await fetch(`${baseUrl}cards`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(cards)
  });
  if (!response.ok) throw response;
  return await response.json();
}