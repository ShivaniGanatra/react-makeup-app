
import "./Nav.scss"
import Search from "./../../components/Search/Search"


interface NavProps {
  getTypeOfProduct(product:string) :void   
}
const Nav:React.FC<NavProps> = ({getTypeOfProduct}) => {
  return (
    <nav className="nav">
      <div className="nav__search">
        <Search getTypeOfProduct={getTypeOfProduct}/>
      </div>
      <h1 className="nav__heading">Beauty but cruelty free</h1>
    </nav>
  )
}

export default Nav