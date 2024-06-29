import React, {useState, useEffect} from 'react'
import Logo from "../../../assets/Logo.png"
import { useNavigate } from "react-router-dom";


export const NavBar = () => {

    const [navBarPadding, setnavBarPadding] = useState('p-0');
    const navigation = useNavigate()

    const handleScroll = () => {
      if (window.scrollY > 50) {
        setnavBarPadding('p-1.5');
      } else {
        setnavBarPadding('p-0');
      }
    };
  
    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

    
    return (
        <div className={`sticky top-0 z-40 `}>
            <div className={`flex justify-between shadow-lg duration-300 bg-navBarBgColor text-white ${navBarPadding} `}>
                <div className='p-5'>
                  <img class="h-[2rem] w-[2rem] rounded" src={Logo} alt="Your Company"/>
                </div>
                <div className='font-medium'>
                    <ul className='flex'>
                        <li className='p-5 cursor-pointer'>Home</li>
                        <li className='p-5 cursor-pointer'>Catalog</li>
                        <li className='p-5 cursor-pointer'>About Us</li>
                        <li className='p-5 cursor-pointer'>Contact Us</li>
                        <li className='p-5 cursor-pointer' onClick={() => navigation("/cart")}>Cart</li>
                    </ul>
                </div>
                <div className=''>
                    <ul className='flex font-medium'>
                        <li className='p-5 cursor-pointer' onClick={() => navigation("/signin")}>Sign in</li>
                        <li className='p-5 cursor-pointer'  onClick={() => navigation("/signup")}>Sign Up</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
