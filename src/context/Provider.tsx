import { useState } from "react";
import { ReactNode } from "react";
import { Context } from "./Context";


export default function Provider({ children }: { children: ReactNode }) {

    const [inputData, setInputData] = useState<string>("");

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