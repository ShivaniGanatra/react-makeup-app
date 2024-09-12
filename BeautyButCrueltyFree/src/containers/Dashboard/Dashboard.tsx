import "./Dashboard.scss";
import MakeupProduct from "./../../components/MakeupProduct/MakeupProduct";

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

type DashboardProps = {
    veganMakeupData: MakeupProps[];
    crueltyFreeMakeupData: MakeupProps[];
};

const Dashboard = ({
    veganMakeupData,
    crueltyFreeMakeupData,
}: 
DashboardProps) => {
    return (
        <div className="dashboard">
            <span className="dashboard__content">
                {veganMakeupData.map((veganMakeup) => (
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
                    />
                ))}

                {crueltyFreeMakeupData.map((crueltyFreeMakeup) => (
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
                    />
                ))}
            </span>
        </div>
    );
};

export default Dashboard;
