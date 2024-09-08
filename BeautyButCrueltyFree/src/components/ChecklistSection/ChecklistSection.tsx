
import "./ChecklistSection.scss"

interface ChecklistSectionProps {
  variant:string
  getTypeOfProduct(product:string) :void 
}



const ChecklistSection: React.FC<ChecklistSectionProps>  = ({variant, getTypeOfProduct}) => {

  //https://stackoverflow.com/questions/26069238/call-multiple-functions-onclick-reactjs
  //i want to get multiple type of products so i will make a function that houses several functions


  return (
    <section className="checklist">
        <h1 className="checklist__title">{variant}</h1>
            <section className="checklist__section">
                <button onClick={() => getTypeOfProduct("face")} className="checklist__section-title">face</button>
                <button onClick={() => getTypeOfProduct("foundation")} className="checklist__product-type">Foundation</button>
                <button onClick={() => getTypeOfProduct("blush")} className="checklist__product-type">Blush</button>
                <button onClick={() => getTypeOfProduct("bronzer")} className="checklist__product-type">Bronzer</button>
            </section> 
            <section className="checklist__section">
                <button onClick={() => getTypeOfProduct("eyes")} className="checklist__section-title">eyes</button>
                <button onClick={() => getTypeOfProduct("eyeliner")} className="checklist__product-type">Eyeliner</button>
                <button onClick={() => getTypeOfProduct("eyeshadow")} className="checklist__product-type">Eyeshadow</button>
                <button onClick={() => getTypeOfProduct("mascara")} className="checklist__product-type">Mascara</button>
                
            </section>
            <section className="checklist__section">
                <button onClick={() => getTypeOfProduct("lips")} className="checklist__section-title">lips</button>
                <button onClick={() => getTypeOfProduct("lip_liner")} className="checklist__product-type">Lip-liner</button>
                <button onClick={() => getTypeOfProduct("lipstick")} className="checklist__product-type">Lipstick need to specify category too</button>
            </section>
            <section className="checklist__section">
            <button onClick={() => getTypeOfProduct("nail_polish")} className="checklist__section-title">nails</button>
            <button onClick={() => getTypeOfProduct("nail_polish")} className="checklist__product-type">Nail Varnish</button>
            </section>
    </section>
  )
}


//find a way to have state in prior one and chnage state here using function
// https://soufiane-oucherrou.medium.com/how-pass-function-as-props-to-child-in-react-and-typescript-2fafafa6a945
//the varaint which is the title cruelty free and vegan will also need to be used to choose the array to use

export default ChecklistSection


// product type is the house for the