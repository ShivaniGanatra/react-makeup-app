

interface KeyProps {
    toggleKeys: () => void
}
const Keys = ({toggleKeys}:KeyProps) => {

    return (
        <div>
            <div className="key__content" onClick={toggleKeys}>
                <div className="key__item">
                    <div className="key__shade key__shade--vegan"></div>
                    <div className="key__name "> : Vegan</div>
                </div>
                <div className="key__item">
                    <div className="key__shade key__shade--vegan-crueltyfree"></div>
                    <div className="key__name">: Vegan & Cruelty Free</div>
                </div>
            </div>
        </div>
    );
};

export default Keys;
