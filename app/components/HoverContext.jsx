import React, { createContext, useState } from 'react';

export const defaultHoverContext = createContext();

export const HoverProvider = ({ children }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
    <HoverContext.Provider value={{ isHovered, setIsHovered }}>
        {children}
    </HoverContext.Provider>
    );
};