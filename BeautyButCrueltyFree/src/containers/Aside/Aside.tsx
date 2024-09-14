import "./Aside.scss";
import ChecklistSection from "./../../components/ChecklistSection/ChecklistSection";

interface AsideProps {
    getTypeOfProduct(product: string): void;
}

const Aside: React.FC<AsideProps> = ({ getTypeOfProduct }) => {
    return (
        <aside className="aside">
            <div className="aside__buttons">
                <button
                    onClick={() => getTypeOfProduct("")}
                    className="aside__title"
                >
                    All Products
                </button>
            </div>
            <h1 onClick={() => getTypeOfProduct('Vegan')} className="aside__sub-title">Vegan</h1>
            <h1 onClick={() => getTypeOfProduct('cruelty free')} className="aside__sub-title">Cruelty free & Vegan</h1>
            <ChecklistSection
                getTypeOfProduct={getTypeOfProduct}
                variant="Vegan"
            />
        </aside>
    );
};

export default Aside;
