import React from 'react';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import Gallery from '../Gallery/Gallery';
import ProductDelivery from '../ProductDelivery/ProductDelivery';
import UseTitle from '../../../Hooks/UseTitle';
import OurServices from '../OurServices/OurServices';
import UserWork from '../UserWork/UserWork';

const Home = () => {
UseTitle('Home')
  return (
    <div> 
<Banner></Banner>
<Gallery></Gallery>
<Category></Category>
<UserWork></UserWork>
<OurServices></OurServices>
<ProductDelivery></ProductDelivery>
  </div>
  );
};

export default Home;