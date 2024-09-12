import "./Nav.scss";
import Search from "./../../components/Search/Search";
import NavButtons from "./../../components/NavButtons/NavButtons";
import { useState } from "react";
import { Link } from "react-router-dom";

interface NavProps {
    getTypeOfProductInSearch(product: string): void;
}
const Nav: React.FC<NavProps> = ({ getTypeOfProductInSearch }) => {
    const [showNav, setShowNav] = useState(false);
    const toggleNav = () => {
        setShowNav(!showNav);
    };

    return (
        <nav className="nav">
            <div className="nav__search">
                <button onClick={toggleNav} className="nav__click">
                    click
                </button>

                <Search getTypeOfProductInSearch={getTypeOfProductInSearch} />
            </div>
            <h1 className="nav__heading">Beauty but cruelty free</h1>
            <div className="nav-center">
                {showNav && (
                    <div className="pop-up" onClick={toggleNav}>
                        <button>x</button>
                        <p>Hey Gorgeous</p>
                        <p>input form element</p>

                        <p>To get emails of marketing offers please sign up</p>
                    </div>
                )}
            </div>
            <div>
                <Link to="/">
                    <NavButtons label="Home Page" variant="primary" />
                </Link>

                <Link to="/test">
                    <NavButtons label="Featured Brands" variant="primary" />
                </Link>

                <Link to="/test2">
                    <NavButtons label="Featured Products" variant="secondary" />
                </Link>
            </div>
        </nav>
    );
};

export default Nav;
