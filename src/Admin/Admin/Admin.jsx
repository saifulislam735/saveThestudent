// import React from 'react';
import { Outlet } from "react-router-dom";
import SidebarMenu from "../SidebarMenu/SidebarMenu";

const Admin = () => {
    return (
        <div className="flex h-screen">
            <SidebarMenu />
            <div className="flex-1 p-4 overflow-auto">
                <Outlet />
            </div>
        </div>
    );
};

export default Admin;
