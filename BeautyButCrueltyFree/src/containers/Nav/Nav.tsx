import "./Nav.scss";
import Search from "./../../components/Search/Search";
import NavButtons from "./../../components/NavButtons/NavButtons";

interface NavProps {
    getTypeOfProduct(product: string): void;
}
const Nav: React.FC<NavProps> = ({ getTypeOfProduct }) => {
    return (
        <nav className="nav">
            <div className="nav__search">
                <Search getTypeOfProduct={getTypeOfProduct} />
            </div>

            <h1 className="nav__heading">Beauty but cruelty free</h1>

            <NavButtons label="Home Page" variant="primary" />
            <NavButtons label="Featured Brands" variant="primary" />
            <NavButtons label="Featured Products" variant="secondary" />

            <div className="pop-up">
                <h1>Hey Gorgeous</h1>
                <p>input form element</p>
            
                <p>To get emails of marketing offers please sign up</p>
            </div>
        </nav>
    );
};

export default Nav;
