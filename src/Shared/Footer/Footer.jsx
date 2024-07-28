// import React from 'react';
import logo from '../../assets/logo.png'
const Footer = () => {
    return (
        <footer className="footer bg-[#151515] items-center px-[150px] text-[#F3F3F3] py-32 ">
            <aside>

                <img src={logo} alt="" />
                <p>
                    Save the student working for student   <br />
                    movement in Bangladesh and highlighting   <br />
                    their demand quota demand for reform and <br />
                    students secuirty.<br />
                </p>
            </aside>
            <nav>
                <h6 className="footer-title">About</h6>
                <a className="link link-hover">Home</a>
                <a className="link link-hover">Service</a>
                <a className="link link-hover">Contact</a>
            </nav>
            <nav>
                <h6 className="footer-title">Us</h6>
                <a className="link link-hover">Help</a>
                <a className="link link-hover">About</a>

            </nav>
            <nav>
                <h6 className="footer-title">Support</h6>
                <a className="link link-hover">Support Center</a>
                <a className="link link-hover">Feedback</a>
                <a className="link link-hover">Accesbility</a>
            </nav>
        </footer>
    );
};

export default Footer;