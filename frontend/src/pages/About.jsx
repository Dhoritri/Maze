import { assets } from "../assets/assets";
import NewsletterBox from "../components/NewsletterBox";
import Title from "../components/Title";

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img
          className="w-full max-w-[450px]"
          src={assets.about_img}
          alt="Maze Clothing - Fashion and Comfort"
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-white">
          <p>
            Welcome to Maze – where fashion, comfort, and creativity meet! Our
            brand offers unique clothing designed for anime lovers, comfort
            seekers, and creative individuals. Each piece blends anime culture
            with soft, breathable fabrics for everyday wear.
          </p>
          <p>
            At Maze, style and comfort go hand in hand. Our 100% organic cotton
            garments are perfect for any occasion, from a bike ride to lounging
            at home. Feel relaxed, express yourself, and enjoy superior quality.
          </p>
          <p>
            Join us in embracing sustainable fashion, anime, bikes, and cars.
            Maze is where comfort and creativity collide.
          </p>
          <b className="">Our Mission</b>
          <p>
            Maze's mission is simple: combine anime-inspired and design and many more with
            eco-friendly, comfortable clothing that helps you express your
            individuality while staying comfortable all day long.
          </p>
        </div>
      </div>

      <div className="text-3xl py-4">
        <Title text1={"WHY"} text2={"CHOOSE US"} />
      </div>

      <div className="text-white flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality Assurance</b>
          <p>
            Our clothing is made with 100% organic cotton, ensuring softness,
            breathability, and sustainability.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Convenience</b>
          <p>
            Maze garments are versatile, perfect for bike rides, city exploring,
            or just relaxing at home.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Exceptional Customer Service</b>
          <p>
            Our dedicated team ensures top-notch service, from inquiries to
            support after your purchase.
          </p>
        </div>
      </div>

      <NewsletterBox />
    </div>
  );
};

export default About;
