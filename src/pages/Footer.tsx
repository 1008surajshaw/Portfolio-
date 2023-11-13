import { Link } from 'react-router-dom';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';
import { Element } from 'react-scroll';
import { Link as ScrollLink } from 'react-scroll';

const Footer = () => {
  return (
    <footer className='bg-richblack-900 text-richblack-5 min-h-fit w-screen z-50  '>
      <div className='w-8/12 mx-auto pt-5'>
        <div className='flex flex-col justify-between lg:flex'>
            <div className='flex flex-col'>
                <p className='text-7xl font-extrabold'>Suraj</p>
              
                <p className='text-7xl font-extrabold'>Shaw</p>
              
              
                <p className='text-3xl font-bold'>Full stack developer</p>
              
            </div>
            <div className='flex flex-col font-semibold text-2xl cursor-pointer'>
             
             <ScrollLink 
             to="home" 
             spy={true}
             smooth={true}
             duration={500}>

               <p>home</p>
             </ScrollLink>
              
            <ScrollLink spy={true}
                  smooth={true}
                  duration={500}
                  to="tech">

                 <p>tech</p>
              </ScrollLink>

              
            <ScrollLink spy={true}
                  smooth={true}
                  duration={500}
                  to="pro">

                  <p>project</p>
             </ScrollLink>
               
            </div>
        </div>
        <div className="flex mx-auto justify-center bottom-[20%] space-x-4 mt-4">
          <a  href="www.linkedin.com/in/suraj-shaw-16675624b" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-2xl hover:text-blue-500" />
          </a>
          <a href="https://github.com/1008surajshaw" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-2xl hover:text-blue-500" />
          </a>
          <a href="https://twitter.com/@SurajShaw771506" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="text-2xl hover:text-blue-500" />
          </a>
        </div>
        <div className='flex mx-auto justify-center pt-5'>
        &#169; Suraj shaw. All rights reserved
        </div>
        </div>
    </footer>
  );
};

export default Footer;
