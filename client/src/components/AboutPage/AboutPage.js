import React, { useEffect } from 'react';
import Header from '../Header/Header';
import Blogs from '../Blogs/Blogs';
import Doctors from '../Doctors/Doctors';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import About from '../About/About';
const AboutPage = () => {
    useEffect(() => {window.scrollTo(0,0)}, [])
    return (
        <React.Fragment>
            <Header></Header>
            <About/>
            <Blogs></Blogs>
            <Doctors></Doctors>
            <Contact></Contact>
            <Footer></Footer>
        </React.Fragment>
    );
};

export default AboutPage;