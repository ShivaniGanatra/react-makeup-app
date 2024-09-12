import "./Aside.scss";
import ChecklistSection from "./../../components/ChecklistSection/ChecklistSection";

interface AsideProps {
    getTypeOfProduct(product: string): void;
}

const Aside: React.FC<AsideProps> = ({ getTypeOfProduct }) => {
    return (
        <aside className="aside">
            <div className="but">
                <button
                    onClick={() => getTypeOfProduct("")}
                    className="aside__button"
                >
                    All Products
                </button>
            </div>
            <h1 className="aside__title">Vegan</h1>
            <h1 className="aside__title">Cruelty free</h1>
            <ChecklistSection
                getTypeOfProduct={getTypeOfProduct}
                variant="Vegan"
            />
        </aside>
    );
};

export default Aside;
