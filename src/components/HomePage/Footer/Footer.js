import React from 'react';
import './Footer.css';
import FooterCol from '../FooterCol/FooterCol';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faGooglePlusG } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    const contact = [
        { name: "16016"},
        { name: "helpingHand@gmail.com" },
    ]
    const ourAddress = [
        { name: "House # 35, Road # 10, Block - D"},
        { name: "Gulshan, Dhaka 1212" },
    ]
    const services = [
        { name: "House Shift"},
        { name: "House Clean" },
        { name: "Electrician Sevice"},
        { name: "Painting House" },
    ]
    return (
        <footer className="footer-area clear-both">
            <div className="container pt-5 footer-div">
                <div align="left" className="row py-5">
                    <FooterCol key={1} menuTitle="Our Contact" menuItems={contact}>
                        <ul className="social-media list-inline pt-4">
                            <li className="list-inline-item"><a href="//facebook.com"><FontAwesomeIcon className="icon active-icon" icon={faFacebookF} /></a></li>
                            <li className="list-inline-item"><a href="//google.com"><FontAwesomeIcon className="icon" icon={faGooglePlusG} /></a></li>
                            <li className="list-inline-item"><a href="//instagram.com"><FontAwesomeIcon className="icon" icon={faInstagram} /></a></li>
                        </ul>
                    </FooterCol>
                    <FooterCol key={2} menuTitle="Our Address" menuItems={ourAddress} >
                    </FooterCol>
                    <FooterCol key={3} menuTitle="Our Services" menuItems={services} />

                </div>
                <div className="copyRight text-center">
                    <p className="text-white pb-3">Copyright {(new Date()).getFullYear()} All Rights Reserved</p>
                </div>
            </div>
        </footer>

    );
};

export default Footer;
