import "./Search.scss"
import { useState } from "react"
const Search = () => {


  const [search, setSearch]: [string, (search: string) => void] = useState("");

  const handleChange = (e: { target: { value: string; }; }) => {
    setSearch(e.target.value);
  };

  // https://stackoverflow.com/questions/65582975/make-a-search-filter-with-react-and-typescript

  console.log("this is the search term " + search)
  return (
    <div className="search">
      <input onChange={handleChange} className="search__input" placeholder="search for makeup items" type="text" />
      <p>{search}</p>
    </div>
  )
}

export default Search



