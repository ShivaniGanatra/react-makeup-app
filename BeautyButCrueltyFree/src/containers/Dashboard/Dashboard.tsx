import "./Dashboard.scss";
import MakeupCard from "./../../components/MakeupProduct/MakeupProduct";

interface MakeupProps {
  id: number;
  image_link: string;
  name: string;
}

type DashboardProps = {
  veganMakeupData: MakeupProps[];
  crueltyFreeMakeupData: MakeupProps[];
};

const Dashboard = ({ veganMakeupData, crueltyFreeMakeupData }: DashboardProps) => {
  return (
    <div className="dashboard">
      {crueltyFreeMakeupData.map((veganMakeup) => (
        <MakeupCard
          key={veganMakeup.id}
          id={veganMakeup.id}
          name={veganMakeup.name}
          image_link={veganMakeup.image_link}
        />
      ))}
    </div>
  );
};

export default Dashboard;