
import DashboardHeader from '../Dashboard Pages/DashboardHeader';
import { Helmet } from 'react-helmet-async';
import { Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
       <>
       <Helmet>
        <title>Abid | Dashboard</title>
       </Helmet>
       <DashboardHeader></DashboardHeader>
        <Outlet></Outlet>
       </>
    );
};

export default Dashboard;