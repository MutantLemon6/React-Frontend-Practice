import { useContext } from "react";
import { BoxesContext } from "./BoxesUtil";

export function useBoxes() {
    const context = useContext(BoxesContext)
    if(context === undefined) {
        throw new Error('useBoxes must be used within a BoxesProvider');
    }
    return context;
}