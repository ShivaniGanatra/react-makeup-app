import "./ChecklistSection.scss"
const ChecklistSection = () => {
  return (
    <section className="checklist">ChecklistSection
        <h1 className="checklist__title">Cruelty Free</h1>
            <section className="checklist__section">
                <h2 className="checklist__section-title">face</h2>
                <p className="checklist__product-type">Foundation</p>
                <p className="checklist__product-type">Blush</p>
                <p className="checklist__product-type">Bronzer</p>
            </section> 
            <section className="checklist__section">
                <h2 className="checklist__section-title">eyes</h2>
                <p className="checklist__product-type">Eyebrow</p>
                <p className="checklist__product-type">Eyeliner</p>
                <p className="checklist__product-type">Eyeshadow</p>
                <p className="checklist__product-type">Mascara</p>
                
            </section>
            <section className="checklist__section">
                <h2 className="checklist__section-title">lips</h2>
                <p className="checklist__product-type">Lip-liner</p>
                <p className="checklist__product-type">Lipstick need to specify category too</p>
                <p className="checklist__product-type">Lip Gloss need to specify category too</p>
            </section>
    </section>
  )
}

export default ChecklistSection


// product type is the house for the