import { useCallback, useEffect, useState, type ReactNode } from "react";
import useFetch from "../../../../hooks/useFetch";
import type { IBox } from "../../../../interfaces/box";
import { BoxesContext } from "./BoxesUtil";

export function BoxesProvider({ children }: { children: ReactNode }) {
    const { data: fetchedBoxes, loading, error } = useFetch<IBox[]>("boxes");
    const [boxes, setBoxes] = useState<IBox[] | null>(null);

    useEffect(() => {
        if (fetchedBoxes) {
            setBoxes(fetchedBoxes);
        }
    }, [fetchedBoxes]);

    const updateBoxTimestamp = useCallback((boxId: string | number) => {
        setBoxes(prevBoxes => prevBoxes?.map(box => box.id === boxId ? { ...box, updatedDate: new Date().toISOString() } : box) || null)
    }, [])

    const updateBoxCardCount = useCallback((boxId: string | number, newCount: number) => {
        setBoxes(prevBoxes =>
            prevBoxes?.map(box =>
                box.id === boxId
                    ? {
                        ...box,
                        cardCount: newCount,
                        updatedDate: new Date().toISOString()
                    }
                    : box
            ) || null
        );
    }, []);

    return (
        <BoxesContext.Provider value={{
            boxes,
            loading,
            error,
            updateBoxTimestamp,
            updateBoxCardCount
        }}>
            {children}
        </BoxesContext.Provider>
    );
}
