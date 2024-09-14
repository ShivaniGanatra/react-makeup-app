import MakeupProduct from "../../components/MakeupProduct/MakeupProduct";
import Product from "../../types & interfaces/Product";
import "./Favourites.scss";

interface FavouriteProps {
    cleanedFavouriteCrueltyFreeData: Product[];
    cleanedFavouriteVeganData: Product[];
}

const Favorites = ({
    cleanedFavouriteVeganData,
    cleanedFavouriteCrueltyFreeData,
}: FavouriteProps) => {
    return (
        <div>


            <span className="dashboard__content">
                {cleanedFavouriteVeganData.map((veganMakeup) => (
                    <MakeupProduct
                        key={veganMakeup.id}
                        id={veganMakeup.id}
                        name={veganMakeup.name}
                        image_link={veganMakeup.image_link}
                        description={veganMakeup.description}
                        brand={veganMakeup.brand}
                        variant="green"
                        product_type={veganMakeup.product_type}
                        product_colors={veganMakeup.product_colors}
                        addElement={function (
                            _id: string,
                            _heartStatus: boolean
                        ): void {
                            throw new Error("Function not implemented.");
                        }}
                    />
                ))}

                {cleanedFavouriteCrueltyFreeData.map((crueltyFreeMakeup) => (
                    <MakeupProduct
                        key={crueltyFreeMakeup.id}
                        id={crueltyFreeMakeup.id}
                        name={crueltyFreeMakeup.name}
                        image_link={crueltyFreeMakeup.image_link}
                        description={crueltyFreeMakeup.description}
                        brand={crueltyFreeMakeup.brand}
                        variant="purple"
                        product_type={crueltyFreeMakeup.product_type}
                        product_colors={crueltyFreeMakeup.product_colors}
                        addElement={function (): void {
                            throw new Error("Function not implemented.");
                        }}
                    />
                ))}
            </span>
        </div>
    );
};

export default Favorites;
