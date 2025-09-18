import { useContext } from "react"
import "./inputSearch.css"
import Context from "../../../context/Context";
export default function InputSearch() {

    const {inputData, setInputData} = useContext(Context);



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
