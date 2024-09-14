import "./Nav.scss";
import Search from "./../../components/Search/Search";
import NavButtons from "./../../components/NavButtons/NavButtons";
import { useState } from "react";
import { Link } from "react-router-dom";
import mailIcon from "./../../assets/images/email-1-svgrepo-com.svg";
import Key from "./../../assets/images/key.svg";

interface NavProps {
    getTypeOfProductInSearch(product: string): void;
}
const Nav: React.FC<NavProps> = ({ getTypeOfProductInSearch }) => {
    const [showNav, setShowNav] = useState(false);
    const toggleNav = () => {
        setShowNav(!showNav);
    };

    const [showKeys, setShowKeys] = useState(false);
    const toggleKeys = () => {
        setShowKeys(!showKeys);
    };

    return (
        <nav className="nav">
            <div className="nav__icons">
                <button className="nav__button" onClick={toggleKeys}>
                    <img className="nav__icon" src={Key} alt="key icon" />
                </button>
                <button className="nav__button" onClick={toggleNav}>
                    <img className="nav__icon" src={mailIcon} alt="mail icon" />
                </button>
            </div>

            <Search getTypeOfProductInSearch={getTypeOfProductInSearch} />

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

            <div className="key">
                {showKeys && (
                    <div className="key__content" onClick={toggleKeys}>
                        <div className="key__item">
                            <div className="key__shade key__shade--vegan"></div>
                            <div className="key__name "> : Vegan</div>
                        </div>
                        <div className="key__item">
                            <div className="key__shade key__shade--vegan-crueltyfree"></div>
                            <div className="key__name">
                                : Vegan & Cruelty Free
                            </div>
                        </div>
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
                    <NavButtons label="Favourites" variant="primary" />
                </Link>
            </div>
        </nav>
    );
};

export default Nav;
