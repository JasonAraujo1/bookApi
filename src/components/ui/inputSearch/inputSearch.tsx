import { useContext, useState } from "react"
import "./inputSearch.css"
import Context from "../../../context/Context";
export default function InputSearch() {


    const { setInputData } = useContext(Context);

    const[targetInput, setTargetInput] = useState("")

    function handleBuscar(){
        setInputData(targetInput)
    }

    return (
        <div className="divInput">
            <span>Busque por um livro</span>
            <input type="text" onChange={(event) => setTargetInput(event.target.value)} />
            <button onClick={handleBuscar}>Buscar</button>
        </div>
    )
}
