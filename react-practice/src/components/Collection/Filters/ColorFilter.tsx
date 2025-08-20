interface ColorFilterProps {
    title: string;
    values: Record<string, boolean>;
    onChange: (key: string, checked: boolean) => void;
}

export default function ColorFilter({ title, values, onChange }: ColorFilterProps) {
    return (
        <fieldset>
            <legend>{title}</legend>
            {Object.keys(values).map((key) => (
                <label key={key} className="me-3">
                    <input
                        type="checkbox"
                        checked={values[key]}
                        onChange={(e) =>
                            onChange(key, e.target.checked)
                        }
                    />
                    <img
                        src={`assets/images/${key}-symbol.webp`}
                        alt={key}
                        className="symbol-image ms-1"
                        style={{ width: 20, height: 20 }}
                    />
                </label>
            ))}
        </fieldset>
    )
}