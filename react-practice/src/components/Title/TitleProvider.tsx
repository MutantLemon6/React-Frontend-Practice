import { useState, type ReactNode } from "react";
import { TitleContext } from "./TitleUtils";

export function TitleProvider({ children }: { children: ReactNode }) {
    const [title, setTitle] = useState('MTG Card Organizer');
    return (
        <TitleContext.Provider value={{ title, setTitle }}>
            {children}
        </TitleContext.Provider>
    );
}

