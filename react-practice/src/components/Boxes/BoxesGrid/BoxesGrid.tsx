import type { IBox } from "../../../interfaces/box";
import useFetch from "../../../hooks/useFetch";
import Spinner from "../../Spinner";
import { useTitle } from "../../Title/useTitle";
import { useEffect } from "react";
import Card from "../Card/Card";

export default function BoxesGrid() {
    const { data: boxes, loading, error } = useFetch<IBox[]>("boxes");
    const { setTitle } = useTitle();

    useEffect(() => {
        setTitle("Your Boxes")
    }, [setTitle])
    if (loading) return <Spinner />;
    if (error) throw error;
    if (boxes === null) return <div>You do not have any boxes</div>
    return (
            <div className="container">
                <div className="row">
                    {boxes.map((box) => (
                        <Card key={box.id} box={box} />
                    ))}
                </div>
            </div>
    );
}
