import type { ReactNode } from "react";
import useFetch from "../../../../hooks/useFetch";
import type { IBox } from "../../../../interfaces/box";
import { BoxesContext } from "./BoxesUtil";

export function BoxesProvider({ children }: { children: ReactNode }) {
    const {data: boxes, loading, error} = useFetch<IBox[]>("boxes");

    return (
        <BoxesContext.Provider value={{ boxes, loading, error}}>
            {children}
        </BoxesContext.Provider>
    );
}
