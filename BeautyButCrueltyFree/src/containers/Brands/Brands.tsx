import "./Brands.scss";
import MakeupCard from "./../../components/MakeupProduct/MakeupProduct";
import Shade from "../../types & interfaces/Shade";
import Search from "../../components/Search/Search";

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
    addToFavourites(id: string, heartStatus: boolean): void;
    crueltyFreeSearchMakeupData: MakeupProps[];
    veganBrands: string[];
    crueltyFreeBrands: string[];
    getTypeOfProductInSearch(product: string): void;
};

const Brands = ({
    getTypeOfProductInSearch,
    crueltyFreeSearchMakeupData,
    veganSearchMakeupData,
    veganBrands,
    crueltyFreeBrands,
    addToFavourites
}: BrandProps) => {
    return (
        <div className="brand">
            <h2 className="brand__title">Filter by brands in search bar</h2>
            <Search getTypeOfProductInSearch={getTypeOfProductInSearch}/>
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
                    addToFavourites={addToFavourites}
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
                    addToFavourites={addToFavourites}
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
            </section>
        </div>
    );
};

export default Brands;
