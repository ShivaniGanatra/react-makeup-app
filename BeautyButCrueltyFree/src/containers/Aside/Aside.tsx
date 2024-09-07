import "./Aside.scss"
import ChecklistSection from "./../../components/ChecklistSection/ChecklistSection"



const Aside = ({}) => {
    
    return <aside className="aside">
        <ChecklistSection variant= "Vegan"/>
        <ChecklistSection variant= "Cruelty Free"/>

    </aside>;
};

export default Aside;
