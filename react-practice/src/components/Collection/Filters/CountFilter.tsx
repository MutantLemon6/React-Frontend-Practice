interface CountFilterProps {
    minCount: number | undefined;
    maxCount: number | undefined;
    onMinChange: (value: number) => void;
    onMaxChange: (value: number) => void;
}

export default function CountFilter({ minCount, maxCount, onMinChange, onMaxChange }: CountFilterProps) {
    return (
        <div className="row">
            <div className="col">
                <label className="form-label w-100">
                    Min Count:
                    <input
                        type="number"
                        className="form-control"
                        min={0}
                        value={minCount}
                        onChange={(e) => onMinChange(Number(e.target.value))}
                    />
                </label>
            </div>
            <div className="col">
                <label className="form-label w-100">
                    Max Count:
                    <input
                        type="number"
                        className="form-control"
                        min={0}
                        value={maxCount || ""}
                        onChange={(e) => onMaxChange(Number(e.target.value))}
                    />
                </label>
            </div>
        </div>
    );
}