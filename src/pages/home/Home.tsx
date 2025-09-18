import { useEffect, useState } from "react"
import "./Home.css"
import InputSearch from "../../components/ui/inputSearch/inputSearch.js"

export default function Home() {

  const [titles, setTitles] = useState([])

  useEffect(() => {
    async function titleData(titles) {
      const req = await fetch(`https://openlibrary.org/search.json?title=${encodeURIComponent(titles)}`)
      const res =  await req.json()
      setTitles(res.docs)
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
