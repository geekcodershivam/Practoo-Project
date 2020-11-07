import React, { useEffect } from 'react';
import Header from '../Header/Header';
import Blogs from '../Blogs/Blogs';
import Doctors from '../Doctors/Doctors';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import ContactUs from '../ContactUs/ContactUs';
const ContactUsPage = () => {
    useEffect(() => {window.scrollTo(0,0)}, [])
    return (
        <React.Fragment>
            <Header></Header>
            <ContactUs/>
            <Blogs></Blogs>
            <Doctors></Doctors>
            <Contact></Contact>
            <Footer></Footer>
        </React.Fragment>
    );
};

export default ContactUsPage;