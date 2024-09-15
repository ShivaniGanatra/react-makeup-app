import "./Dashboard.scss";
import MakeupProduct from "./../../components/MakeupProduct/MakeupProduct";
import Product from "../../types & interfaces/Product";

type DashboardProps = {
    veganMakeupData: Product[];
    crueltyFreeMakeupData: Product[];
    addToFavourites(id: string, heartStatus: boolean): void;
};

const Dashboard = ({
    veganMakeupData,
    crueltyFreeMakeupData,
    addToFavourites,
}: DashboardProps) => {
    return (
        <div className="dashboard">
            <span className="dashboard__content">
                {veganMakeupData.map((veganMakeup) => (
                    <MakeupProduct
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

                {crueltyFreeMakeupData.map((crueltyFreeMakeup) => (
                    <MakeupProduct
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
            </span>
        </div>
    );
};

export default Dashboard;
