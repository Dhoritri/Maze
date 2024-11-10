import { assets } from "../assets/assets"
import NewsletterBox from "../components/NewsletterBox"
import Title from "../components/Title"

const Contact = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-10">
         <Title text1={'CONTACT'} text2={'US'}/>
      </div>
      <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-28">
          <img src={assets.contact_img} className="w-full md:max-w-[480px]" alt="" />
          <div className="flex flex-col justify-center items-start gap-6 text-white">
            <p className="text-2xl font-medium">Our Store</p>
            <p>Malibagh Mour <br /> Mouchak Tower Level-15</p>
            <p>Phone Number:+880 01700921615 <br /> Mobile:+880 01796582064 <br /> Email: officiallmmaze@gmail.com</p>

            <p></p>
          </div>
      </div>
      <NewsletterBox/>
    </div>
  )
}

export default Contact
