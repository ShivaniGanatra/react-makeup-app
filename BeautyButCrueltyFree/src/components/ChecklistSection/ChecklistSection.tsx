import { useState } from "react"
import "./ChecklistSection.scss"

interface ChecklistSectionProps {
  variant:string
}



const ChecklistSection: React.FC<ChecklistSectionProps>  = ({variant}) => {

  const [value,setValue] = useState("")


const storeValue = (productType:string):undefined => {
  setValue(productType)
  console.log(productType)
}

  return (
    <section className="checklist">
        <h1 className="checklist__title">{variant}</h1>
            <section className="checklist__section">
                <button className="checklist__section-title">face</button>
                <button onClick={() => storeValue("foundation")} className="checklist__product-type">Foundation</button>
                <button onClick={() => storeValue("blush")} className="checklist__product-type">Blush</button>
                <button onClick={() => storeValue("bronzer")} className="checklist__product-type">Bronzer</button>
            </section> 
            <section className="checklist__section">
                <h2 className="checklist__section-title">eyes</h2>
                <button className="checklist__product-type">Eyebrow</button>
                <button className="checklist__product-type">Eyeliner</button>
                <button className="checklist__product-type">Eyeshadow</button>
                <button className="checklist__product-type">Mascara</button>
                
            </section>
            <section className="checklist__section">
                <h2 className="checklist__section-title">lips</h2>
                <button onClick={() => storeValue("liner")} className="checklist__product-type">Lip-liner</button>
                <button onClick={() => storeValue("lip")} className="checklist__product-type">Lipstick need to specify category too</button>
                <button onClick={() => storeValue("gloss")} className="checklist__product-type">Lip Gloss need to specify category too</button>
            </section>
    </section>
  )
}


//find a way to have state in prior one and chnage state here using function
//the varaint which is the title cruelty free and vegan will also need to be used to choose the array to use

export default ChecklistSection


// product type is the house for the