import "./Brands.scss";
import MakeupCard from "./../../components/MakeupProduct/MakeupProduct";
import Shade from "../../types & interfaces/Shade";

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
    veganBrands: string[];
    crueltyFreeBrands: string[];
};

const Brands = ({
    crueltyFreeSearchMakeupData,
    veganSearchMakeupData,
    veganBrands,
    crueltyFreeBrands,
}: BrandProps) => {
    return (
        <div className="brand">
            <h2 className="brand__title">Filter by brands in search bar</h2>
            <section className="brand__names">
                <p className="brand__vegan">{`Vegan brands include: ${veganBrands.join(
                    ", "
                )}`}</p>
                <p className=" brand__cruelty-free">{`Cruelty Free brands include: ${crueltyFreeBrands.join(
                    ", "
                )}`}</p>
            </section>

            <section className="brand__content">
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
                        product_colors={veganMakeup.product_colors} addElement={function (_id: string): void {
                            throw new Error("Function not implemented.");
                        } }                    />
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
                        product_colors={crueltyFreeMakeup.product_colors} addElement={function (): void {
                            throw new Error("Function not implemented.");
                        } }                    />
                ))}
            </section>
        </div>
    );
};

export default Brands;
