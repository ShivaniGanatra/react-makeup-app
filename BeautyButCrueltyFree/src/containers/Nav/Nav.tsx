import "./Nav.scss";
import Search from "./../../components/Search/Search";
import NavButtons from "./../../components/NavButtons/NavButtons";
import { FormEvent, useState } from "react";
import { Link } from "react-router-dom";
import mailIcon from "./../../assets/images/email-1-svgrepo-com.svg";
import Key from "./../../assets/images/key.svg";
import Keys from "../../components/Keys/Keys";

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

    const [user, setUser] = useState({
        Name: "Gorgeous Girlie!",
        email: "",
    });

    const onSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const Name = event.currentTarget.Name.value;
        const email = event.currentTarget.email.value;

        if (Name && email) {
            event.currentTarget.reset();
            setUser({ Name, email });
        }
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
                    <div className="pop-up">
                        <p onClick={toggleNav}>x</p>
                        <h3 className="pop-up__title">{`Hey ${user.Name}`}</h3>
                        <form onSubmit={onSubmit} className="pop-up__form">
                            <div className="pop-up__section">
                                <p>
                                    To get insight into latest cruelty free
                                    offers and suscribe to marketing emials
                                    please enter your name and email{" "}
                                </p>
                                <label htmlFor="Name">name</label>
                                <input
                                    type="text"
                                    name="Name"
                                    className="pop-up__input"
                                />
                            </div>
                            <div className="pop-up__section">
                                <label htmlFor="email">email</label>
                                <input
                                    type="text"
                                    name="email"
                                    className="pop-up__input"
                                />
                            </div>

                            <button className="pop-up__button">Save</button>
                        </form>
                    </div>
                )}
            </div>

            <div className="key">{showKeys && <Keys toggleKeys={toggleKeys}/>}</div>

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
