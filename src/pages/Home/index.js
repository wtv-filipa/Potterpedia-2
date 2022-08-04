import React from 'react';
import Navbar1 from '../../components/Navbar';
import Banner from '../../components/Home/BannerHome';
import CardsHome from '../../components/Home/CardsHome';
import Footer from '../../components/Footer';
import BackTop from '../../components/BtnToTop';
import "../../styles/general.css";


export default () => {
    return (
        <div>
            <Navbar1 />
            <Banner />
            <CardsHome />
            <BackTop />
            <Footer />
        </div>
    )
}