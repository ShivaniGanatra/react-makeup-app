
import "./Nav.scss"
import Search from "./../../components/Search/Search"
const Nav = () => {
  return (
    <nav className="nav">
      <div className="nav__search">
        <Search/>
      </div>
      <h1 className="nav__heading">Beauty but cruelty free</h1>
    </nav>
  )
}

export default Nav