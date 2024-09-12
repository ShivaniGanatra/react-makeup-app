import "./Brands.scss";
import MakeupCard from "./../../components/MakeupProduct/MakeupProduct";

interface Shade {
    hex_value: string;
    colour_name: string;
}

interface MakeupProps {
    id: number;
    image_link: string;
    name: string;
    description: string;
    brand: string;
    product_type: string;
    product_colors: Shade[];
}

type BrandProps = {
    veganSearchMakeupData: MakeupProps[];
    crueltyFreeSearchMakeupData: MakeupProps[];  
}

const Brands = ({crueltyFreeSearchMakeupData,veganSearchMakeupData}:BrandProps) => {
  return (
    <div>
                    {veganSearchMakeupData.map((veganMakeup) => (
                <MakeupCard
                    key={veganMakeup.id}
                    id={veganMakeup.id}
                    name={veganMakeup.name}
                    image_link={veganMakeup.image_link}
                    description={veganMakeup.description}
                    brand={veganMakeup.brand}
                    variant="green"
                    product_type={veganMakeup.product_type}
                    product_colors={veganMakeup.product_colors}
                />
            ))}


{crueltyFreeSearchMakeupData.map((crueltyFreeMakeup) => (
                <MakeupCard
                    key={crueltyFreeMakeup.id}
                    id={crueltyFreeMakeup.id}
                    name={crueltyFreeMakeup.name}
                    image_link={crueltyFreeMakeup.image_link}
                    description={crueltyFreeMakeup.description}
                    brand={crueltyFreeMakeup.brand}
                    variant="purple"
                    product_type={crueltyFreeMakeup.product_type}
                    product_colors={crueltyFreeMakeup.product_colors}
                />
            ))}
    </div>
  )
}

export default Brands