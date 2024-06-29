import React, {useState, useEffect} from 'react'

export const NavBar = () => {

    const [navBarPadding, setnavBarPadding] = useState('p-0');

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
                    <h1>Logo</h1>
                </div>
                <div className='font-medium'>
                    <ul className='flex'>
                        <li className='p-5 cursor-pointer'>Home</li>
                        <li className='p-5 cursor-pointer'>Catalog</li>
                        <li className='p-5 cursor-pointer'>About Us</li>
                        <li className='p-5 cursor-pointer'>Contact Us</li>
                    </ul>
                </div>
                <div className=''>
                    <ul className='flex font-medium'>
                        <li className='p-5 cursor-pointer'>Sign in</li>
                        <li className='p-5 cursor-pointer'>Sign Up</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
