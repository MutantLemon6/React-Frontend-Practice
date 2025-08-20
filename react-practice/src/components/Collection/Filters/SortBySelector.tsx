interface SortBySelectorProps {
    sortBy: string;
    onChange: (value: string) => void;
}

export default function SortBySelector({ sortBy, onChange }: SortBySelectorProps) {
    return (
        <div className="col mt-3">
            <div className="row">
                <label>
                    Sort By:
                    <select
                        className="form-select"
                        value={sortBy}
                        onChange={(e) => onChange(e.target.value)}
                    >
                        <option value="name-atz">Name: A-Z</option>
                        <option value="name-zta">Name: Z-A</option>
                        <option value="count-dsc">Count: Descending</option>
                        <option value="count-asc">Count: Ascending</option>
                        <option value="color-wubrgc">Color: WUBRG</option>
                        <option value="color-cgrbuw">Color: GRBUW</option>
                    </select>
                </label>
            </div>
        </div>
    );
}