import "./Search.scss"
import { useState } from "react"

interface SearchProps {
  getTypeOfProduct(product:string) :void   
}

const Search:React.FC<SearchProps> = ({getTypeOfProduct}) => {


  const [search, setSearch]: [string, (search: string) => void] = useState("");

  const handleChange = (e: { target: { value: string; }; }) => {
    setSearch(e.target.value);
  };

  const [submit, setSumbit] = useState(search)

  const submitFunction = () => {
    setSumbit(search)
    getTypeOfProduct(submit.toLowerCase())
  }

  // https://stackoverflow.com/questions/65582975/make-a-search-filter-with-react-and-typescript

  console.log("this is the search term " + search)
  return (
    <div className="search">
      <input onChange={handleChange} className="search__input" placeholder="search for makeup items" type="text" />
      <p>{search}</p>
      <button onClick={submitFunction} onChange={submitFunction} >doubl click</button>
    </div>
  )
}

export default Search



