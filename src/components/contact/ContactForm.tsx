import ContactUsForm from "./ContactUsForm"



const ContactForm = () => {
  return (
    <div className='border border-richblack-600 text-richblack-300 rounded-xl p-7 lg:p-14 flex gap-3 flex-col'>
    <h1 className='text-4xl leading-10 font-semibold text-richblack-50'>
      Contact Me
    </h1>
    <p className='text-richblack-500 text-sm'>
      Want to connect? My inbox is always open!
    </p>
    <div className='mt-7'>
       <ContactUsForm/>
    </div>
    </div>
  )
}

export default ContactForm