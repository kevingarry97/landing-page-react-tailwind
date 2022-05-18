import React from 'react';
import Logo from '../assets/images/logo.svg'

const Navbar = () => {
  return (  
    <nav className='relative container mx-auto p-6'>
      <div className="flex items-center justify-between">
        <div className="pt-2">
          <img src={Logo} alt="" />
        </div>
        <div className="md:flex hidden space-x-12">
          <a href="#" className='hover:text-darkGrayishBlue'>Pricing</a>
          <a href="#" className='hover:text-darkGrayishBlue'>Product</a>
          <a href="#" className='hover:text-darkGrayishBlue'>About Us</a>
          <a href="#" className='hover:text-darkGrayishBlue'>Careers</a>
          <a href="#" className='hover:text-darkGrayishBlue'>Community</a>
        </div>
        <a href="#" className='hidden md:block p-3 -x-6 pt-2 text-white rounded-full baseline bg-brightRed hover:bg-brightRedLight'>
          Get Started
        </a>

        <button className='block hamburger md:hidden focus:outline-none'>
          <span className='hamburger-top' />
          <span className='hamburger-middle' />
          <span className='hamburger-bottom' />
        </button>
      </div>
    </nav>
  );
}
 
export default Navbar;
