import type { CardFilters } from "../../../interfaces/card-filters"
import type { IColorFilter } from "../../../interfaces/color-filters";
import ColorFilter from "./ColorFilter";
import CountFilter from "./CountFilter";
import NameFilter from "./NameFilter";
import SortBySelector from "./SortBySelector";

interface CollectionFiltersProps {
    filters: CardFilters;
    sortBy: string;
    onFilterChange: (field: keyof CardFilters, value: any) => void;
    onNestedFilterChange: (
        filterGroup: "color" | "colorIdentity",
        colorKey: keyof CardFilters["color"] | keyof CardFilters["colorIdentity"],
        checked: boolean
    ) => void;
    onSortByChange: (sortBy: string) => void;
}
export default function CollectionFilters({
    filters,
    sortBy,
    onFilterChange,
    onNestedFilterChange,
    onSortByChange
}: CollectionFiltersProps) {
    return (
        <div className="row mb-3">
            <div className="col">
                <button
                    className="btn btn-primary mb-3"
                    data-bs-toggle="collapse"
                    data-bs-target="#filtersCollapse"
                    role="button"
                    aria-expanded="false"
                    aria-controls="filtersCollapse"
                >
                    Filter Collection
                </button>
                <div className="collapse" id="filtersCollapse">
                    <div className="card card-body">
                        <div className="container">
                            <NameFilter
                                value={filters.name}
                                onChange={(value) => onFilterChange("name", value)}
                            />

                            <CountFilter
                                minCount={filters.minCount}
                                maxCount={filters.maxCount}
                                onMinChange={(value) => onFilterChange("minCount", value)}
                                onMaxChange={(value) => onFilterChange("maxCount", value)}
                            />

                            <div className="row">
                                <ColorFilter
                                    title="Color"
                                    values={filters.color as unknown as Record<string, boolean>}
                                    onChange={(key: string, checked: boolean) => onNestedFilterChange("color", key as keyof IColorFilter, checked)}
                                />

                                <ColorFilter
                                    title="Color Identity"
                                    values={filters.colorIdentity as unknown as Record<string, boolean>}
                                    onChange={(key: string, checked: boolean) => onNestedFilterChange("colorIdentity", key as keyof IColorFilter, checked)}
                                />
                            </div>

                            <SortBySelector
                                sortBy={sortBy}
                                onChange={onSortByChange}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}