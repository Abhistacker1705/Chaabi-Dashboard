import React from "react";
import SideBar from "../components/SideBar";
import SmallGraphCards from "../components/SmallGraphCards";

const Dashboard = () => {
  return (
    <SideBar>
      <header id="dashboard__header">
        <h1 id="dashboard__header__heading">Hello, Puneet Dhiman</h1>
        <h2 id="dashboard__header__subheading">
          Following is your organization’s performance summary
        </h2>
      </header>
      <div id="dashboard__container">
        <SmallGraphCards xData={"Workers"} />
      </div>
    </SideBar>
  );
};

export default Dashboard;
