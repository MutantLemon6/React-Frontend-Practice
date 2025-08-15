import type { ICard } from "../interfaces/card";

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

export async function fetchCards(name: string) {
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