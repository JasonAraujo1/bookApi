import {  useEffect, useState } from "react";
import InputSearch from "../../components/ui/inputSearch/inputSearch.js";
import "./Home.css"
import { UseAuth } from "../../context/Context.js";

type Book = {
  author_name?: string[];
  title?: string;
};

export default function Home() {

  const { inputData, setInputData } = UseAuth()

  const [titles, setTitles] = useState<Book[]>([]);

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
