
import React from 'react';
import { Toaster } from 'react-hot-toast';
import Layout from '../components/Layout';

import '../styles/globals.css'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import StateContext from '../context/StateContext';


function MyApp({ Component, pageProps }) {
  return (
    <>
    <StateContext>
   <Layout>
  <Toaster/>
  <Component {...pageProps} />
   </Layout>
   </StateContext>
   </>
  )
}

export default MyApp
