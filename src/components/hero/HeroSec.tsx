import { useState,useEffect } from "react";
import {motion} from "framer-motion"
import uim from "../../assets/userAsset/avatar-smile.webp"
import CV from "../../assets/Suraj__CV.pdf"
const  HeroSec = () => {
    const textToType =
    '"A fresher with experience", this line says exactly who he is. He is a software developer who crafts beautiful web and apps. His perfect balance of technical & managerial skills sets him apart from the crowd.';

  const [displayText, setDisplayText] = useState('');
  const openPdf = () => {
    window.open(CV, '_blank'); // This will open the PDF in a new tab/window
  };
  useEffect(() => {
    let index = 0;
    const intervalId = setInterval(() => {
      if (index <= textToType.length) {
        setDisplayText(textToType.slice(0, index));
        index++;
      } else {
        clearInterval(intervalId);
      }
    }, 50);

    return () => clearInterval(intervalId);
  }, [textToType]);
  return (
    <div className="w-11/12">
    <div className="bg-gradient-to-r from-brown-900 to-pink-600 flex flex-col lg:flex lg:flex-row-reverse min-h-screen w-11/12 max-w-maxContent mx-auto items-center justify-center text-richblack-25 relative pt-16 lg:p-8 bg-richblack-900 ">

        <div className="lg:w-1/2 lg:pr-8">
          <img src={uim} className="mx-auto" width={400} height={400} alt=""/>
        </div>

        <div className="w-full lg:w-1/2 gap-3 leading-6 lg:pl-8 lg:pr-8 overflow-y-hidden">
          <div className="flex gap-2 p-2 items-center">
            <hr className="bg-richblack-50 w-20 my-auto" />
            <div>who is he ?</div>
          </div>

          <div className="text-6xl lg:text-8xl p-4">
            Suraj Shaw
          </div>

          <div className="text-lg lg:text-xl p-4 text-customGray">
               {displayText}
           </div>

          <div className="flex flex-col lg:flex-row gap-3 p-4">
            <motion.button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-9 rounded"  whileHover={{ scale: 1.1 }}
             whileTap={{ scale: 0.9 }}
             initial={{ scale: 1 }}
             onClick={openPdf}>
              Know more
            </motion.button>
            <motion.button className="border-2 border-blue-500 hover:bg-blue-500 hover:border-transparent text-white font-bold py-2 px-4 rounded"  whileHover={{ scale: 1.1 }}
             whileTap={{ scale: 0.9 }}
             initial={{ scale: 1 }}
             onClick={openPdf}>
              Download resume
            </motion.button>
          </div>
        </div>

      </div>
    </div>
  )
}

export default HeroSec