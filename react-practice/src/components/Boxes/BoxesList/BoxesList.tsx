import Thumbnail from "../Thumbnail/Thumbnail";
import type { IBox } from "../../../interfaces/box";
import useBoxes from "../../../hooks/useBoxes";
import Title from "../../Title";

const BoxesList = () => {
    const { boxes, setBoxes } = useBoxes();

    const handleAddBox = async () => {
        try {
            const newBox: IBox = {
                id: 0, // This will be replaced by the server
                name: `Box ${boxes.length + 1}`,
                imageUrl: "https://vignette.wikia.nocookie.net/magicthegathering/images/3/3d/Borborygmos_EnragedART1.jpg/revision/latest?cb=20200419143106&path-prefix=it",
                createdDate: new Date().toISOString(),
                updatedDate: new Date().toISOString(),
                cardCount: 0,
                rows: []
            }
            const addedBox = await (await fetch("http://localhost:5000/api/boxes", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(newBox)
            })).json();
            setBoxes([...boxes, addedBox]);

        } catch (error) {
            console.error("Error adding box:", error);
        }
    }
    return (
        <>
            <Title>Your Boxes</Title>
            <div className="container-fluid p-4">
                <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-4">
                    {boxes.map(box => (
                        <div className="col" key={box.id}>
                            <Thumbnail box={box} />
                        </div>
                    ))}
                </div>
            </div>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-4">

            </div>
            <button className="btn btn-primary mt-3" onClick={handleAddBox}>
                Add Box
            </button>
        </>
    );
}
export default BoxesList;
