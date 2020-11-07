import React, { useEffect } from 'react';
import Header from '../Header/Header';
import Banner from '../Banner/Banner';
import Features from '../Features/Features';
import Services from '../Services/Services';
import SpecialBanner from '../SpecialBanner/SpecialBanner';
import AppointmentBanner from '../AppointmentBanner/AppointmentBanner';
import Testimonials from '../Testimonials/Testimonials';
import Blogs from '../Blogs/Blogs';
import Doctors from '../Doctors/Doctors';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';

const Home = () => {
    useEffect(() => {window.scrollTo(0,0)}, [])
    return (
        <React.Fragment>
            <Header></Header>
            <Banner></Banner>
            <Features></Features>
            <Services></Services>
            <SpecialBanner></SpecialBanner>
            <AppointmentBanner></AppointmentBanner>
            <Testimonials></Testimonials>
            <Blogs></Blogs>
            <Doctors></Doctors>
            <Contact></Contact>
            <Footer></Footer>
        </React.Fragment>
    );
};

export default Home;