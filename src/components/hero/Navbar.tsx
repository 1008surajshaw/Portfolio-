import { Link, useLocation } from 'react-router-dom';
import logo from '../../assets/technologyStack/next-js.webp';
import { useState } from 'react';
import {motion} from "framer-motion"
const Navbar = () => {
  const navlinks = [
    { name: 'Home', href: '/' },
    { name: 'Project', href: '/project' },
    { name: 'Tech', href: '/tech' },
    { name: 'Contact', href: '/contact' },
  ];

  const location = useLocation();
  const [showNav, setShowNav] = useState(false);

  const toggleNav = () => {
    setShowNav(!showNav);
  };

  return (
    <div className={`flex h-14 items-center justify-center border-b-[1px] border-b-richblack-700 ${location.pathname !== '/' ? 'bg-richblack-800' : ''} transition-all duration-200`}>
      <div className="flex w-11/12 max-w-maxContent items-center justify-between">
        <Link to="/">
          <img src={logo} width={50} height={12} alt="Logo" loading="lazy" />
        </Link>

        <nav className={`${showNav ? 'block' : 'hidden'} md:block`}>
          <ul className="flex gap-x-6 text-richblack-25">
            {navlinks.map((link, index) => (
              <motion.li key={index}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              initial={{ scale: 1 }}>
                <Link
                  to={link.href}
                  className={`text-blue-500 hover:text-blue-800 ${location.pathname === link.href ? 'font-bold' : ''}`}

                >
                  {link.name}
                </Link>
              </motion.li>
            ))}
          </ul>
        </nav>

        <div className="md:hidden">
          <button onClick={toggleNav}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
