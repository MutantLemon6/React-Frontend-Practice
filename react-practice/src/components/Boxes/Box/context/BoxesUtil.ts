import { createContext } from "react";
import type { IBox } from "../../../../interfaces/box";

export interface BoxesContextType {
    boxes: IBox[] | null;
    loading: boolean;
    error: any;
}

export const BoxesContext = createContext<BoxesContextType | undefined>(undefined);