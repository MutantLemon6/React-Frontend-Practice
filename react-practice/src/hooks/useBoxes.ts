import { useEffect, useState } from "react";
import type { IBox } from "../interfaces/box";

const useHouses = () => {
    const [boxes, setBoxes] = useState<IBox[]>([]);

    useEffect(() => {
        const fetchBoxes = async () => {
            try {
                const fetchedBoxes = await fetch("http://localhost:5000/api/boxes");
                const data = await fetchedBoxes.json();
                setBoxes(data);
            } catch (error) {
                console.error("Error fetching boxes:", error);
            }
        };
        fetchBoxes();
    }, []);

    return {boxes, setBoxes};
};

export default useHouses;