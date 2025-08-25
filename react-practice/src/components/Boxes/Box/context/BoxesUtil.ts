import { createContext } from "react";
import type { IBox } from "../../../../interfaces/box";

export interface BoxesContextType {
    boxes: IBox[] | null;
    loading: boolean;
    error: Response | null;
    updateBoxTimestamp: (boxId: string | number) => void;
    updateBoxCardCount: (boxId: string | number, newCount: number) => void;
}

export const BoxesContext = createContext<BoxesContextType | undefined>(undefined);