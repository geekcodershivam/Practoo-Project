import React, { useEffect } from 'react';
import Header from '../Header/Header';
import Testimonials from '../Testimonials/Testimonials';
import Blogs from '../Blogs/Blogs';
import Doctors from '../Doctors/Doctors';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import PatientsLogin from '../PatientsLogin/PatientsLogin';

const PatientsPage = () => {
    useEffect(() => {window.scrollTo(0,0)}, [])
    return (
        <React.Fragment>
            <Header></Header>
            <PatientsLogin/>
            <Testimonials></Testimonials>
            <Blogs></Blogs>
            <Doctors></Doctors>
            <Contact></Contact>
            <Footer></Footer>
        </React.Fragment>
    );
};

export default PatientsPage;