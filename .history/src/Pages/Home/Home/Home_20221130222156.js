import { Box } from '@mui/material';
import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Blogs from '../Blogs/Blogs';
import Contact from '../Contact/Contact';
import CustomerReviews from '../CustomerReviews/CustomerReviews';
import Products from '../Products/Products';
import Story from '../Story/Story';

const Home = () => {
    return (
        <Box>
            <Navigation></Navigation>
            <Banner></Banner>
            <Products></Products>
            <Story></Story>
            <CustomerReviews></CustomerReviews>
            <Blogs></Blogs>
            <About></About>
            <Contact></Contact>
            <Footer></Footer>
        </Box>
    );
};

export default Home;