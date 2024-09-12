import "./Nav.scss";
import Search from "./../../components/Search/Search";
import NavButtons from "./../../components/NavButtons/NavButtons";
import { useState } from "react";
import { Link } from "react-router-dom";
import mailIcon from "./../../assets/images/email-1-svgrepo-com.svg"

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

                <button className="nav__button" onClick={toggleNav} >
                    <img className="nav__mail-icon" src={mailIcon} alt="" />
                </button>

                <Search getTypeOfProductInSearch={getTypeOfProductInSearch} />
            </div>
            <h1 className="nav__heading">Beauty but cruelty free</h1>
            <div className="nav-center">
                {showNav && (
                    <div className="pop-up" onClick={toggleNav}>
                        <p>Hey Gorgeous</p>
                        <p>input form element</p>

                        <p>To get emails of marketing offers please sign up</p>
                    </div>
                )}
            </div>
            <div>
                <Link to="/">
                    <NavButtons label="Filter by type" variant="primary" />
                </Link>

                <Link to="/test">
                    <NavButtons label="Filter by brand" variant="secondary" />
                </Link>

                <Link to="/test2">
                    <NavButtons label="Favourited" variant="primary" />
                </Link>
            </div>
        </nav>
    );
};

export default Nav;
