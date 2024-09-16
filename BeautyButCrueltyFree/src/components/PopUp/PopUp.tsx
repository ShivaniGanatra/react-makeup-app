import { FormEventHandler } from "react";
import "./PopUp.scss";

interface PopUpProps {
    toggleNav: () => void;
    user: {
        Name: string;
        email: string;
    };
    onSubmit: FormEventHandler<HTMLFormElement>;
}

const PopUp = ({ toggleNav, user, onSubmit }: PopUpProps) => {
    return (
        <div>
            <div className="pop-up">
                <p onClick={toggleNav}>x</p>
                <h3 className="pop-up__title">{`Hey ${user.Name}`}</h3>
                <form onSubmit={onSubmit} className="pop-up__form">
                    <div className="pop-up__section">
                        <p>
                            To get insight into latest cruelty free offers and
                            suscribe to marketing emials please enter your name
                            and email{" "}
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
        </div>
    );
};

export default PopUp;
