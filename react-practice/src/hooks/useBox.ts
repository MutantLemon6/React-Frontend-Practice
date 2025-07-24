import { useEffect, useState } from "react"
import type { IBox } from "../interfaces/box"

const useBox = (id: number) => {
    const [box, setBox] = useState<IBox>();

    useEffect(() => {
        const fetchBox = async (id: number) => {
            try{
                const fetchedBox = await fetch(`http://localhost:5000/api/boxes/${id}`)
                const data = await fetchedBox.json();
                setBox(data);
            }catch (error){
                console.error("Error fetching box:", error);
            }
        };
        fetchBox(id)
    }, [id]);

    return {box, setBox};
};

export default useBox;