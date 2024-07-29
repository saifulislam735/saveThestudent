// import React from 'react';
import { Link } from 'react-router-dom';

const SidebarMenu = () => {
    return (
        <div className="w-64 h-screen bg-gray-800 text-white flex flex-col">
            <div className="p-4 text-2xl font-bold border-b border-gray-700">Admin Panel</div>
            <nav className="flex flex-col flex-1 p-4 space-y-4">
                <Link to="/adminDash/postmanage" className="hover:bg-gray-700 p-2 rounded">Post Manage</Link>
                <Link to="/adminDash/breakingupdate" className="hover:bg-gray-700 p-2 rounded">Breaking Update</Link>
                <Link to="/adminDash/shoidinfo" className="hover:bg-gray-700 p-2 rounded">Should Info</Link>
                <Link to="/adminDash/usercontrol" className="hover:bg-gray-700 p-2 rounded">User Control</Link>
                <Link to="/adminDash/admincontrol" className="hover:bg-gray-700 p-2 rounded">Admin Control</Link>
            </nav>
        </div>
    );
};

export default SidebarMenu;
