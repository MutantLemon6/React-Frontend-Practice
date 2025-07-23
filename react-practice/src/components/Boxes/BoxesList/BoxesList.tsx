import { useEffect, useState } from "react";
import Thumbnail from "../Thumbnail/Thumbnail";
import type { IBox } from "../../../interfaces/box";

const BoxesList = () => {
    const [boxes, setBoxes] = useState<IBox[]>([]);

    useEffect(() => {
        const fetchBoxes = async () => {
            const response = await fetch("http://localhost:5000/api/boxes");
            const data = await response.json();
            setBoxes(data);
        }
        fetchBoxes();

    });
    const addBox = () => {
        setBoxes([
            ...boxes,
            {
                id: boxes.length + 1,
                name: `Box ${boxes.length + 1}`,
                imageUrl: "https://vignette.wikia.nocookie.net/magicthegathering/images/3/3d/Borborygmos_EnragedART1.jpg/revision/latest?cb=20200419143106&path-prefix=it",
                createdDate: new Date().toISOString(),
                updatedDate: new Date().toISOString(),
                cardCount: 0,
                rows: []
            }
        ])
    }
    return (
        <>
            <div className="row mb-2">
                <h5 className="text-center">
                    Boxes
                </h5>
            </div>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-4">
                {boxes.map(box => (
                    <div className="col">
                        <Thumbnail key={box.id} box={box} />
                    </div>
                ))}
            </div>
            <button className="btn btn-primary mt-3" onClick={addBox}>
                Add Box
            </button>
        </>
    );
}
export default BoxesList;
