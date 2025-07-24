import { useParams } from "react-router";
import useBox from "../../../hooks/useBox";
import BoxRows from "../BoxRows/BoxRows";
import Title from "../../Title";

const Box: React.FC = () => {
    const { id } = useParams();
    const numberId = Number(id);
    const { box } = useBox(numberId);

    if (!box) {
        return <p>No box data available.</p>;
    }

    return (
        <>
            <Title>{box.name}</Title>
            <img src={box.imageUrl} alt={box.name} className="mb-3 w-100 h-25 overflow-y-hidden" />
            <p>Created: {new Date(box.createdDate).toLocaleDateString()}</p>
            <p>Last Updated: {new Date(box.updatedDate).toLocaleDateString()}</p>

            <BoxRows rows={box.rows} />
        </>

    )
}

export default Box;