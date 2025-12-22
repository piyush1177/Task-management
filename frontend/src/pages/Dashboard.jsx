import React from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div>
      <h2>Dashboard</h2>
      <button onClick={() => navigate("/tasks")}>Go to Tasks</button>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Dashboard;
