import "./Search.scss"


interface SearchProps {
  getTypeOfProduct(product:string) :void   
}

const Search:React.FC<SearchProps> = ({}) => {








  // https://stackoverflow.com/questions/65582975/make-a-search-filter-with-react-and-typescript


  return (
    <div className="search">
      <input  className="search__input"  type="text" />
      <p></p>
    </div>
  )
}

export default Search



