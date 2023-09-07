import { useState } from "react";
import Sidebar from "../Dashboard/SideBar/Sidebar";
import "./Dashboard.css";
import Notifiaction from "./Notification/Notifiaction";
import { Outlet } from "react-router-dom";

const Dashboard = ({ setDataFromParent }) => {
  const [dataFromChild, setDataFromChild] = useState(null);

  const handleChildData = (childData) => {
    setDataFromChild(childData);
    setDataFromParent(childData);
  };
  return (
    <>
      <div className="dashboard">
        <Notifiaction />
        <Sidebar onDataUpdate={handleChildData} />
        <Outlet />
      </div>
    </>
  );
};

export default Dashboard;
