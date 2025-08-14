import { useEffect, useState } from "react";
import type { IBox } from "../../../interfaces/box";
import type { IRow } from "../../../interfaces/row";
import { useNavigate } from "react-router-dom";
import { useTitle } from "../../Title/useTitle";

export default function CreateBox() {
    const navigate = useNavigate();
    const { setTitle } = useTitle();
    const [box, setBox] = useState<IBox & { numberOfRows?: number }>({
        id: 0,
        name: "",
        imageUrl: "",
        createdDate: new Date().toISOString(),
        updatedDate: new Date().toISOString(),
        rows: [],
        cardCount: 0
    } as IBox & { numberOfRows?: number });

    useEffect(() => {
        setTitle("Create Box")
    }, [setTitle])
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
        <form onSubmit={submit} className="container-fluid">
            <div className="mb-3">
                <label htmlFor="name" className="form-label text-white">Box Name</label>
                <input type="text" name="name" value={box.name} onChange={change} placeholder="Box Name" required id="name" className="form-control"/>
            </div>
            <div className="mb-3">
                <label htmlFor="numberOfRows" className="form-label text-white">Number of Rows</label>
                <input type="number" name="numberOfRows" value={box.numberOfRows} onChange={change} placeholder="Number of Rows" required id="numberOfRows" className="form-control"/>
            </div>
            <div className="mb-3">
                <label htmlFor="imageUrl" className="form-label text-white">Image URL</label>
                <input type="text" name="imageUrl" value={box.imageUrl} onChange={change} placeholder="Image URL" required id="imageUrl" className="form-control"/>
            </div>
            <button type="submit" className="btn btn-primary">Create Box</button>
        </form>
    )
}