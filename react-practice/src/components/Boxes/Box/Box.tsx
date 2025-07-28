import { useParams } from "react-router";
import BoxRows from "./BoxRows";
import Title from "../../Title";
import BoxDetails from "./BoxDetails";
import useFetch from "../../../hooks/useFetch";
import type { IBox } from "../../../interfaces/box";
import PageNotFound from "../../Errors/PageNotFound";
import Spinner from "../../Spinner";

export default function Box() {
    const { id } = useParams();
    const { data: box, loading, error } = useFetch<IBox>(`boxes/${id}`);

    if (error) throw error;
    if (loading) return <Spinner/>;
    if (!box) return <PageNotFound/>
    
    return (
        <>
            <Title>
                {box.name}
            </Title>
            <main>
                <BoxDetails box={box} />
                <BoxRows rows={box.rows} />
            </main>
        </>
    );
};