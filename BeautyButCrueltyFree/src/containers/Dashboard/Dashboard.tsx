import "./Dashboard.scss";
import MakeupCard from "./../../components/MakeupProduct/MakeupProduct";

interface MakeupProps {
    id: number;
    image_link: string;
    name: string;
    description: string;
    brand: string;
}

type DashboardProps = {
    veganMakeupData: MakeupProps[];
    crueltyFreeMakeupData: MakeupProps[];
};

const Dashboard = ({
    veganMakeupData,
    crueltyFreeMakeupData,
}: DashboardProps) => {
    return (
        <div className="dashboard">
            {veganMakeupData.map((veganMakeup) => (
                <MakeupCard
                    key={veganMakeup.id}
                    id={veganMakeup.id}
                    name={veganMakeup.name}
                    image_link={veganMakeup.image_link}
                    description={veganMakeup.description}
                    brand={veganMakeup.brand}
                    variant="green"
                />
            ))}

            {crueltyFreeMakeupData.map((crueltyFreeMakeup) => (
                <MakeupCard
                    key={crueltyFreeMakeup.id}
                    id={crueltyFreeMakeup.id}
                    name={crueltyFreeMakeup.name}
                    image_link={crueltyFreeMakeup.image_link}
                    description={crueltyFreeMakeup.description}
                    brand={crueltyFreeMakeup.brand}
                    variant="purple"
                />
            ))}
        </div>
    );
};

export default Dashboard;
