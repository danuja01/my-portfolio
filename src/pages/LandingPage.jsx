import AboutMe from '../components/AboutMe';
import Gradient from '../components/Gradient';
import Header from '../components/Header';
import Navbar from '../components/Navbar';

import { useEffect, useState } from 'react';

const LandingPage = () => {
  return (
    <>
      <div className='md:hidden'>
        <Gradient />
      </div>
      <div className=' md:snap-y md:snap-mandatory overflow-x-hidden  md:h-screen md:w-screen'>
        <Header />
        <AboutMe />
      </div>
    </>
  );
};

export default LandingPage;
