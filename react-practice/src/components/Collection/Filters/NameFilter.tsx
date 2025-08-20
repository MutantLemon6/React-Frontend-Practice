interface NameFilterProps {
    value: string | undefined;
    onChange: (value: string | undefined) => void;
}

export default function NameFilter({ value, onChange }: NameFilterProps) {
    return (
        <div className="row">
            <div className="col-12">
                <label className="form-label w-100">
                    Name:
                    <input
                        type="text"
                        className="form-control"
                        value={value}
                        onChange={(e) => onChange(e.target.value)}
                        placeholder="Filter by name"
                    />
                </label>
            </div>
        </div>
    )
}