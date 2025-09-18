import { useEffect, useState } from "react"
import { fetchApiTitle } from "../../services/fetchApi.js"
import "./Home.css"
import InputSearch from "../../components/ui/inputSearch/inputSearch.js"

export default function Home() {

  const [titles, setTitles] = useState([])

  useEffect(() => {
    async function titleData() {
      const data = await fetchApiTitle()
      setTitles(data.docs)
    }
    titleData()
  }, [])
  console.log(titles)

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
