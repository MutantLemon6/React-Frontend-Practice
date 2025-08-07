import Thumbnail from "../Thumbnail/Thumbnail";
import type { IBox } from "../../../interfaces/box";
import useFetch from "../../../hooks/useFetch";
import Spinner from "../../Spinner";
import { useTitle } from "../../Title/useTitle";
import { useEffect } from "react";

export default function BoxesList() {
    const { data: boxes, loading, error } = useFetch<IBox[]>("boxes");
    const { setTitle } = useTitle();

    useEffect(() => {
        setTitle("Your Boxes")
    }, [setTitle])
    if (loading) return <Spinner />;
    if (error) throw error;
    if (boxes === null) return <div>You do not have any boxes</div>
    return (
        <>
            <div className="container-fluid p-4">
                <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-4">
                    {boxes?.map(box => (
                        <div className="col" key={box.id}>
                            <Thumbnail box={box} />
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
