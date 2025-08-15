import type { ICard } from "./card";

export interface ICollectionCard extends ICard {
    boxesFoundIn: string[];
}