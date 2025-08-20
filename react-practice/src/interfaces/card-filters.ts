import type { IColorFilter } from "./color-filters";

export interface CardFilters {
    name?: string;
    minCount?: number;
    maxCount?: number;
    color: IColorFilter;
    colorIdentity: IColorFilter;
}