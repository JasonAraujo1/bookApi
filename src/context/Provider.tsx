import Context from './Context';
import { useState } from "react";

import { ReactNode } from "react";

export default function Provider({ children }: { children: ReactNode }) {




    const [inputData, setInputData] = useState([]);

    const contextValue = {
        inputData,
        setInputData
    };

    return (
        <Context.Provider value={contextValue}>
            {children}
        </Context.Provider>
    )
}