import "./Dashboard.scss"

import MakeupProduct from "../../components/MakeupProduct/MakeupProduct";

type DashboardProps = {
  veganMakeupData: object[],
  crueltyFreeMakeupData:object[]
}

const Dashboard = ({veganMakeupData,crueltyFreeMakeupData}:DashboardProps) => {
  return (
    <div className="dashboard">
      Dashboard
        <MakeupProduct veganMakeupData={veganMakeupData} crueltyFreeMakeupData={crueltyFreeMakeupData} />
      </div>
  )
}

export default Dashboard