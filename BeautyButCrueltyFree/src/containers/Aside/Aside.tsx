import "./Aside.scss"
import ChecklistSection from "./../../components/ChecklistSection/ChecklistSection"

interface AsideProps {
    getTypeOfProduct(product:string) :void   
}

const Aside:React.FC<AsideProps> = ({getTypeOfProduct}) => {
    
    return <aside className="aside">
        <div className="but">
        <button onClick={() => getTypeOfProduct("")} className="aside__button">All Products</button></div>
        <ChecklistSection getTypeOfProduct={getTypeOfProduct} variant= "Vegan"/>
        <ChecklistSection getTypeOfProduct={getTypeOfProduct} variant= "Cruelty Free"/>

    </aside>;
};

export default Aside;
