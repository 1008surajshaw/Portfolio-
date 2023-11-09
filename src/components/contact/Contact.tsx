import ContactForm from "./ContactForm"
import ContactDetails from "./ContactDetails"
const Contact = () => {
  return (
    <div className="w-11/12">
       <div className='mx-auto mt-20 flex  max-w-maxContent flex-col justify-between gap-10 text-white lg:flex-row'>
       {/* contact Details */}
       
       {/* Contact Form */}
        <div className="lg:w-[60%]">
          <ContactForm />
        </div>
      </div>
      
    </div>
  )
}

export default Contact