// import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/assets/logo.svg'
const NavBar = () => {
    return (
        <div className="md:px-[150px] py-5 mb-5">
            <div className="navbar bg-base-100">
                <a className="btn btn-ghost text-xl">
                    <img src={logo} alt="" />
                </a>
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul className="menu menu-horizontal px-1 text-[#444] text-[18px] font-semibold	md:ms-[80px]">
                            <li><Link to="/">Home</Link ></li>
                            <li><Link to="/about">About</Link ></li>
                            <li><Link to="/services">Services</Link ></li>
                            <li><Link to="/blog">Blog</Link ></li>
                            <li><Link to="/contact">Contact</Link ></li>
                        </ul>
                    </div>
                </div>
                <div className="navbar-end">
                    <a className="btn">Button</a>
                </div>
            </div>        </div>
    );
};

export default NavBar;