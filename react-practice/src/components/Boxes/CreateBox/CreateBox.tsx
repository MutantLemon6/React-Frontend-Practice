import { useState } from "react";
import type { IBox } from "../../../interfaces/box";
import type { IRow } from "../../../interfaces/row";
import { useNavigate } from "react-router-dom";

export default function CreateBox() {
    const navigate = useNavigate();
    const [box, setBox] = useState<IBox & { numberOfRows?: number }>({
        id: 0,
        name: "",
        imageUrl: "",
        createdDate: new Date().toISOString(),
        updatedDate: new Date().toISOString(),
        rows: [],
        cardCount: 0
    } as IBox & { numberOfRows?: number });

    function change(e: React.ChangeEvent<HTMLInputElement>) {
        setBox({ ...box, [e.target.name]: e.target.value });
    }

    async function submit(e: { preventDefault: () => void; }) {
        e.preventDefault();

        const filledRows: IRow[] = Array(box.numberOfRows).fill(null).map(() => ({
            cards: []
        }));
        const boxToSubmit = {
            ...box,
            rows: filledRows
        }

        const returnBox = await (await fetch("http://localhost:5000/api/boxes", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(boxToSubmit)
        })).json();
        navigate(`/box/${returnBox.id}`);
    }

    return (
        <form onSubmit={submit}>
            <input type="text" name="name" value={box.name} onChange={change} placeholder="Box Name" required />
            <input type="number" name="numberOfRows" value={box.numberOfRows} onChange={change} placeholder="Number of Rows" required />
            <input type="text" name="imageUrl" value={box.imageUrl} onChange={change} placeholder="Image URL" />
            <button type="submit">Create Box</button>
        </form>
    )
}