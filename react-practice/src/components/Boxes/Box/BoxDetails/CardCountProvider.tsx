import { useState, type ReactNode } from "react";
import { CardCountContext } from "./BoxDetailsUtils";

export function CardCountProvider({children} : {children: ReactNode}) {
    const [cardCount, setCardCount] = useState(0);
    return (
        <CardCountContext.Provider value={{ cardCount, setCardCount }}>
            {children}
        </CardCountContext.Provider>
    )
}