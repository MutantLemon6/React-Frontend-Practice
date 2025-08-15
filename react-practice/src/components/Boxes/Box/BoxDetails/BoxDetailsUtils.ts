import { createContext } from "react"

type CardCountContextType = {
    cardCount: number,
    setCardCount: (cardCount: number) => void
}

export const CardCountContext = createContext<CardCountContextType | undefined>(undefined);