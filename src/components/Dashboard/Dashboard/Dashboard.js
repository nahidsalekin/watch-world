import './Dashboard.css'
import React from 'react';
import { Link } from 'react-router-dom';
import {
    Switch,
    Route,
    useRouteMatch
} from "react-router-dom";
import DashboardHome from '../DashboardHome/DashboardHome';
import AdminRoute from '../../Login/AdminRoute/AdminRoute'
import useAuth from '../../../hooks/useAuth';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import AddProduct from '../AddProduct/AddProduct';
import PrivateRoute from '../../Login/PrivateRoute/PrivateRoute';
import MyOrders from '../MyOrders/MyOrders';
import ManageOrders from '../ManageOrders/ManageOrders';
import ManageProducts from '../ManageProducts/ManageProducts';
const Dashboard = () => {
    const { path, url } = useRouteMatch();
    const { admin } = useAuth();

    return (
        <div className="pb-5">
            {admin ?
                <div className="dashboard-links mx-auto shadow mb-5">
                    <Link className="link-item" to={`${url}`}>Dashboard</Link>

                    <Link className="link-item" to={`${url}/makeAdmin`}>Make Admin</Link>
                    <Link className="link-item" to={`${url}/manageOrders`}>Manage Orders</Link>
                    <Link className="link-item" to={`${url}/manageProducts`}>Manage Products</Link>
                    <Link className="link-item" to={`${url}/addProduct`}>Add a Product</Link>
                </div>
                :
                <div className="dashboard-links mx-auto mb-5">
                    <Link className="link-item" to={`${url}`}>Dashboard</Link>

                    <Link className="link-item" to={`${url}/myOrders`}>My Orders</Link>
                </div>
            }

            <Switch>
                <Route exact path={path}>
                    <DashboardHome></DashboardHome>
                </Route>
                <PrivateRoute path={`${path}/myOrders`}>
                    <MyOrders></MyOrders>
                </PrivateRoute>
                <AdminRoute path={`${path}/makeAdmin`}>
                    <MakeAdmin></MakeAdmin>
                </AdminRoute>
                <AdminRoute path={`${path}/manageOrders`}>
                    <ManageOrders></ManageOrders>
                </AdminRoute>
                <AdminRoute path={`${path}/manageProducts`}>
                    <ManageProducts></ManageProducts>
                </AdminRoute>
                <AdminRoute path={`${path}/addProduct`}>
                    <AddProduct></AddProduct>
                </AdminRoute>
            </Switch>
        </div>
    );
};

export default Dashboard;