import Context from './Context';
import { useState } from "react";

export default function  Provider({ children }) {

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