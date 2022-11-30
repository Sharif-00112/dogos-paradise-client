import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Blogs from '../Blogs/Blogs';
import Contact from '../Contact/Contact';
import CustomerReviews from '../CustomerReviews/CustomerReviews';
import Dogs from '../Dogs/Dogs';
import Story from '../Story/Story';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <Dogs></Dogs>
            <Story></Story>
            <CustomerReviews></CustomerReviews>
            <Blogs></Blogs>
            <About></About>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;