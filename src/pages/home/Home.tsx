import { useContext, useEffect, useState } from "react"
import "./Home.css"
import InputSearch from "../../components/ui/inputSearch/inputSearch.js"
import Context from "../../context/Context.js";

export default function Home() {

  const { inputData } = useContext(Context);

  const [titles, setTitles] = useState([])

  useEffect(() => {
    async function titleData() {
      if (!inputData) return;// evita chamada vazia
      const req = await fetch(`https://openlibrary.org/search.json?title=${encodeURIComponent(inputData)}`)
      const res = await req.json()
      setTitles(res.docs)
    }
    titleData()
  }, [inputData])// executa sempre que inputData mudar



  return (
    <div >
      <InputSearch />
      <div className="divcontainer">{titles.map((item) => (
        <div >
          <div className="divBody">
            <h1>{item.author_name}</h1>
            <h3>{item.title}</h3>
            <br />
          </div>
        </div>
      ))}
      </div>
    </div>
  )
}
