import { useState } from "react"
import "./inputSearch.css"
export default function InputSearch() {

    const [inputData, setInputData] = useState("")

    console.log(inputData)

    function handleBuscar(){
        
    }

    return (
        <div className="divInput">
            <span>Busque por um livro</span>
            <input type="text" onChange={(event) => setInputData(event.target.value)} />
            <button onClick={handleBuscar}>Buscar</button>
        </div>
    )
}
