// import React from 'react';

import { Outlet } from "react-router-dom";
import SidebarMenu from "../SidebarMenu/SidebarMenu";

const Admin = () => {
    return (
        <div className="flex">
            <SidebarMenu></SidebarMenu>
            <Outlet></Outlet>
        </div>

    );
};

export default Admin;