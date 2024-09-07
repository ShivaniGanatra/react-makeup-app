import "./ChecklistSection.scss"

interface ChecklistSectionProps {
  variant:string
}

const ChecklistSection: React.FC<ChecklistSectionProps>  = ({variant}) => {
  return (
    <section className="checklist">
        <h1 className="checklist__title">{variant}</h1>
            <section className="checklist__section">
                <button className="checklist__section-title">face</button>
                <button className="checklist__product-type">Foundation</button>
                <button className="checklist__product-type">Blush</button>
                <button className="checklist__product-type">Bronzer</button>
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
                <button className="checklist__product-type">Lip-liner</button>
                <button className="checklist__product-type">Lipstick need to specify category too</button>
                <button className="checklist__product-type">Lip Gloss need to specify category too</button>
            </section>
    </section>
  )
}

export default ChecklistSection


// product type is the house for the