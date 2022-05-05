import Head from 'next/head'
import Image from 'next/image'
import React from 'react';
import HeroBanner from "../components/HeroBanner"
import Product from "../components/Product";
import {client} from '../lib/client';
import FooterBanner from '../components/FooterBanner'; 
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
const index = ({products, bannerData}) => {
  return (
    <div>
    
    <HeroBanner heroBanner = {bannerData.length && bannerData[0]}/>
     {console.log(bannerData)}
    <div className='products-heading'>
      <h2>Best selling Products</h2>
      <p>Speakers of many variations</p>
    </div>
    <div className='products-container'>
      {products?.map((product) => <Product key={product._id} product={product}/>)}
    </div>
     
     <FooterBanner footerBanner={bannerData && bannerData[0]}/>

    </div>
  )
  }

  export const getServerSideProps = async () => {
    const query = '*[_type == "product"]';
    const products = await client.fetch(query);
  
    const bannerQuery = '*[_type == "banner"]';
    const bannerData = await client.fetch(bannerQuery);
  
    return {
      props: { products, bannerData }
    }
  }
  

export default index;