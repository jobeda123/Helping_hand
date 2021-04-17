import React from 'react';
import Admin from '../Admin/Admin';
import MainHeader from '../MainHeader/MainHeader';
import Navbar from '../Navbar/Navbar';
import Reviews from '../Reviews/Reviews';
import Services from '../Services/Services';
import WhyChooseUs from '../WhyChooseUs/WhyChooseUs';
import Footer from '../Footer/Footer';
import './Home.css';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <MainHeader></MainHeader>
            <Services></Services>
            <WhyChooseUs></WhyChooseUs>
            <Reviews></Reviews>
            <Admin></Admin>
            <Footer></Footer>
        </div>
    );
};

export default Home;