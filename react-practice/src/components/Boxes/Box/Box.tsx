import { useParams } from "react-router";
import BoxRows from "./BoxRows";
import BoxDetails from "./BoxDetails/BoxDetails";
import useFetch from "../../../hooks/useFetch";
import type { IBox } from "../../../interfaces/box";
import PageNotFound from "../../Errors/PageNotFound";
import Spinner from "../../Spinner";
import { useEffect, useState } from "react";
import { useTitle } from "../../Title/useTitle";
import { CardCountProvider } from "./BoxDetails/CardCountProvider";
import { useBoxes } from "./context/useBoxes";

export default function Box() {
    const { id } = useParams();
    const { setTitle } = useTitle();
    const { data: fetchedBox, loading, error } = useFetch<IBox>(`boxes/${id}`);
    const [box, setBox] = useState<IBox | null>(null);
    const { updateBoxTimestamp } = useBoxes();

    useEffect(() => {
        if (fetchedBox) {
            setBox(fetchedBox);
        }
    }, [fetchedBox]);

    useEffect(() => {
        if (box?.name)
            setTitle(box.name)
    }, [box, setTitle])


    const handleCardUpdate = () => {
        setBox(prevBox => prevBox ? {
            ...prevBox,
            updatedDate: new Date().toISOString()
        } : null);

        if(box?.id) {
            updateBoxTimestamp(box.id);
        }
    };

    const handleCardDelete = () => {
        setBox(prevBox => prevBox ? {
            ...prevBox,
            updatedDate: new Date().toISOString(),
        } : null);
        
    };

    if (error) throw error;
    if (loading) return <Spinner />;
    if (!box) return <PageNotFound />
    return (
        <div className="container">
            <CardCountProvider>
                <BoxDetails box={box} />
                <BoxRows 
                    rows={box.rows}
                    onCardUpdate={handleCardUpdate}
                    onCardDelete={handleCardDelete}
                />
            </CardCountProvider>
        </div>
    );
};