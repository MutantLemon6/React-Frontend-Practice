import Thumbnail from "../Thumbnail/Thumbnail";
import type { IBox } from "../../../interfaces/box";
import Title from "../../Title";
import useFetch from "../../../hooks/useFetch";
import Spinner from "../../Spinner";

export default function BoxesList() {
    const { data: boxes, loading, error } = useFetch<IBox[]>("boxes");

    if (loading) return <Spinner />;
    if (error) throw error;
    if (boxes === null) return <div>You do not have any boxes</div>
    return (
        <>
            <Title>Your Boxes</Title>
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
