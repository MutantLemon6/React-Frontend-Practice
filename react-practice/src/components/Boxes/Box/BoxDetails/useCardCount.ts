import { useContext } from "react";
import { CardCountContext } from "./BoxDetailsUtils";

export function useCardCount() {
    const context = useContext(CardCountContext);
    if(!context) throw new Error('useCardCount must be used within a CardCountProvider');
    return context;
}