import { useState, useEffect } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import { Twirl as Hamburger } from 'hamburger-react';

import MobileNav from './MobileNav';
import Switcher from './Switcher';
import { downloadCV } from '../js/utilities';

const Navbar = () => {
  let Links = [
    { name: 'Home', link: '#' },
    { name: 'About', link: '#about' },
    { name: 'Work', link: '#projects' },
    { name: 'Contact Me', link: '#contact' },
  ];

  const [open, setOpen] = useState(false);
  const [width, setWidth] = useState(null);
  const [dark, setDark] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  useEffect(() => {
    window.addEventListener('resize', function (event) {
      setWidth(document.body.clientWidth);
    });

    setDark(window.localStorage.getItem('theme') === 'dark' ? true : false);
  }, []);

  return (
    <nav className='w-screen md:absolute md:top-0'>
      <div className=' pt-5  md:pt-8 md:pb-4 md:px-20 px-5 bg-gray flex flex-wrap justify-between md:justify-start md:grid md:grid-cols-5 mb-5   z-0  dark:bg-background'>
        <div className='flex items-center col-span-4 gap-10'>
          <a href='/' className='flex items-center'>
            <img
              src='assets/DANUJA.svg'
              className='md:h-14 mr-1 md:mr-3 h-9 dark:hidden'
              alt='Danuja Logo'
            />
            <img
              src='assets/DANUJA-Dark.svg'
              className='md:h-14 mr-1 md:mr-3 h-9 hidden dark:block'
              alt='Danuja Logo'
            />
            <span className='self-center text-xl md:text-3xl text-blue-ac2 font-bold whitespace-nowrap dark:text-muted'>
              Portfolio
            </span>
          </a>

          <div
            className='items-start justify-start hidden  w-full md:flex md:w-auto md:order-1 '
            id='navbar-cta'
          >
            <ul className='flex z-50 flex-col p-4 mt-4  md:flex-row md:space-x-8 md:mt-0 md:text-md text-blue-ac2 font-bold md:font-semibold md:border-0 dark:text-muted'>
              {Links.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.link}
                    className='block py-2 pl-3 z-[50] pr-4 text-blue-ac2 bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-muted'
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className=' flex items-center md:justify-end md:order-2'>
          <div className='mr-5 z-50'>
            <Switcher />
          </div>
          <button
            type='button'
            className='text-gray select-none z-50 text-sm font-semibold md:text-md md:font-semibold bg-blue-ac1  focus:ring-4 focus:outline-none focus:ring-blue-300  rounded-lg px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
            onClick={downloadCV}
          >
            HIRE ME!
          </button>
          <div className='md:hidden inline-flex items-center  z-50'>
            <Hamburger
              toggled={open}
              toggle={setOpen}
              size={20}
              color='#243A73'
              easing='ease-in'
              hideOutline={false}
              rounded
            />
          </div>
        </div>
      </div>
      {width < 767 && (
        <MobileNav links={Links} open={open} handleOpen={handleOpen} />
      )}
    </nav>
  );
};

export default Navbar;
