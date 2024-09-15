import MakeupProduct from "../../components/MakeupProduct/MakeupProduct";
import Product from "../../types & interfaces/Product";
import "./Favourites.scss";

interface FavouriteProps {
    cleanedFavouriteCrueltyFreeData: Product[];
    cleanedFavouriteVeganData: Product[];
    addToFavourites(id: string, heartStatus: boolean): void;
}

const Favorites = ({
    cleanedFavouriteVeganData,
    cleanedFavouriteCrueltyFreeData,
    addToFavourites
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
                        addToFavourites={addToFavourites}
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
                        addToFavourites={addToFavourites}
                    />
                ))}
            </span>
        </div>
    );
};

export default Favorites;
