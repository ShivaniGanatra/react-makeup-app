import Shade from "../Shade/Shade";
import "./ShadeSection.scss"
type ShadeSectionProps = {
    product_colors: { hex_value: string; colour_name: string }[];
};

const ShadeSection = ({ product_colors }: ShadeSectionProps) => {

    // In the component above - MakeupFront, check if the product actually has shades, if not do not render a shadeSection
    // Shade component is a little box with the shade color passed to it to change depending on the hex code

    //Inline styling on whatever HTML element we are using to display the shade for this section.
    // To render all the shades we will have to map through the array of object and render a Single Shade  component for each shade
    return (
        <div className="shade-section">

        {product_colors.map((color,index)=> (
          <Shade key={color.colour_name + index} color={color.hex_value}/>
        ))}
            
        </div>
    );
};

export default ShadeSection;
