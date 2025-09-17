import { useEffect, useState } from "react"
import { fetchApiTitle } from "../../services/fetchApi.js"

export default function Home() {

  const [ titles , setTitles] = useState([])

  useEffect(()=>{
    async function titleData(){
      const data = await fetchApiTitle()
      setTitles(data.docs) 
    }
    titleData()
  },[])
  console.log(titles)

  return (
    <div>{titles.map((item)=>(
      <h1>{item.author_name}</h1>
    ))}</div> 
  )
}
