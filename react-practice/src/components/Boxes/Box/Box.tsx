import { useParams } from "react-router";
import BoxRows from "./BoxRows";
import BoxDetails from "./BoxDetails/BoxDetails";
import useFetch from "../../../hooks/useFetch";
import type { IBox } from "../../../interfaces/box";
import PageNotFound from "../../Errors/PageNotFound";
import Spinner from "../../Spinner";
import { useEffect } from "react";
import { useTitle } from "../../Title/useTitle";
import { CardCountProvider } from "./BoxDetails/CardCountProvider";

export default function Box() {
    const { id } = useParams();
    const { setTitle } = useTitle();
    const { data: box, loading, error } = useFetch<IBox>(`boxes/${id}`);

    useEffect(() => {
        if (box?.name)
            setTitle(box.name)
    }, [box, setTitle])
    if (error) throw error;
    if (loading) return <Spinner />;
    if (!box) return <PageNotFound />
    return (
        <div className="container">
            <CardCountProvider>
                <BoxDetails box={box} />
                <BoxRows rows={box.rows} />
            </CardCountProvider>
        </div>
    );
};