import { createContext } from "react";
import type { IBox } from "../../../../interfaces/box";

export interface BoxesContextType {
    boxes: IBox[] | null;
    loading: boolean;
    error: Response | null;
}

export const BoxesContext = createContext<BoxesContextType | undefined>(undefined);