import { useContext, useEffect, useState } from "react";
import InputSearch from "../../components/ui/inputSearch/inputSearch.js";
import Context from "../../context/Context.js";
import "./Home.css"

export default function Home() {
  const { inputData } = useContext(Context);
  const [titles, setTitles] = useState([]);

  useEffect(() => {
    async function titleData() {
      if (!inputData) return
      const req = await fetch(
        `https://openlibrary.org/search.json?title=${encodeURIComponent(inputData)}`
      );
      const res = await req.json();
      setTitles(res.docs || []);
    }
    titleData();
  }, [inputData]);

  return (
    <div>
      <InputSearch />
      {titles.map((item, idx) => (
        <div key={idx}>
          <h1>{item.author_name?.join(", ")}</h1>
          <h3>{item.title}</h3>
        </div>
      ))}
    </div>
  );
}
