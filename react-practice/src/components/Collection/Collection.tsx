import { useEffect, useState } from "react";
import { useTitle } from "../Title/useTitle";
import CollectionDetails from "./CollectionDetails";
import type { ICollectionCard } from "../../interfaces/collection-card";
import type { CardFilters } from "../../interfaces/card-filters";
import { fetchCards } from "../../services/cardService";
import CollectionFilters from "./Filters/CollectionFilters";
import CollectionList from "./CollectionList";

const initalFilters: CardFilters = {
    name: "",
    minCount: 0,
    color: {
        white: false,
        blue: false,
        black: false,
        red: false,
        green: false,
        colorless: false,
    },
    colorIdentity: {
        white: false,
        blue: false,
        black: false,
        red: false,
        green: false,
        colorless: false,
    },
}
export default function Collection() {
    const [cards, setCards] = useState<ICollectionCard[]>([]);
    const [sortBy, setSortBy] = useState<string>("name-atz");
    const [filters, setFilters] = useState<CardFilters>(initalFilters);
    const { setTitle } = useTitle();
    useEffect(() => {
        setTitle("Your Collection");
    }, [setTitle]);
    useEffect(() => {
        const fetchData = async () => {
            console.log("fetching data with: ", filters, sortBy);
            const data = await fetchCards(filters, sortBy);
            setCards(data);
            console.log("fetched data: ", data);
        };
        fetchData();
    }, [sortBy, filters]);

    const updateFilter = (field: keyof CardFilters, value: any) => {
        setFilters((prev) => ({
            ...prev,
            [field]: value
        }));
    }

    const updateNestedFilter = (
        filterGroup: "color" | "colorIdentity",
        colorKey: keyof CardFilters["color"] | keyof CardFilters["colorIdentity"],
        checked: boolean
    ) => {
        setFilters((prev) => ({
            ...prev,
            [filterGroup]: {
                ...prev[filterGroup],
                [colorKey]: checked,
            },
        }));
    };

    return (
        <div className="container bg-light rounded p-3 border">
            <CollectionDetails cards={cards} />
            <CollectionFilters
                filters={filters}
                sortBy={sortBy}
                onFilterChange={updateFilter}
                onNestedFilterChange={updateNestedFilter}
                onSortByChange={setSortBy}
            />
            <CollectionList cards={cards} />
        </div>

    );
}
