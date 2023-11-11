import ContactForm from "./ContactForm"
import { Element } from 'react-scroll';
import ContactDetails from "./ContactDetails";
const Contact = () => {
  return (
    <Element name="contact" smooth={true} duration={500}>
    <div className="w-11/12">
       <div className='mx-auto mt-20 flex  max-w-maxContent flex-col justify-between gap-10 text-white lg:flex-row'>
       {/* contact Details */}
       <div className='lg:w-[40%]'>
          <ContactDetails/>
       </div>
       {/* Contact Form */}
        <div className="lg:w-[60%]">
          <ContactForm />
        </div>
      </div>
      
      
    </div>
    </Element>
  )
}

export default Contact