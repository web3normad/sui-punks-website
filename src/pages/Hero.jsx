import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import db from "../firebaseConfig";
import { collection, addDoc } from "firebase/firestore";

import Arrow from "../assets/images/arrow.svg";
import Image1 from "../assets/images/image1.png";
import Image2 from "../assets/images/image2.png";
import Image3 from "../assets/images/image3.png";
import Image4 from "../assets/images/image4.png";
import Image5 from "../assets/images/image5.png";
import Image6 from "../assets/images/image6.png";
import Image7 from "../assets/images/image7.svg";
import Image8 from "../assets/images/image8.svg";
import Image9 from "../assets/images/image9.png";
import Image10 from "../assets/images/image10.png";
import Image11 from "../assets/images/image11.png";

const Hero = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !validateEmail(email)) {
      setMessage("Please enter a valid email.");
      return;
    }

    try {
      await addDoc(collection(db, "subscriptions"), {
        email: email,
        subscribedAt: new Date(),
      });
      setMessage("Subscription successful!");
      setEmail("");
    } catch (error) {
      console.error("Error saving subscription: ", error);
      setMessage("Subscription failed. Please try again.");
    }
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      window.history.pushState(null, null, `#${id}`);
    }
  };

  return (
    <div className="bg-custom-radial text-white w-full overflow-x-hidden">
      {/* Header */}
      <Header />

      <main
        id="home"
        className="h-screen mt-10 flex flex-col items-center justify-center bg-custom-gradient relative pt-16 text-white"
      >
        {/* Left Side Images for Desktop */}
        <div className="hidden md:flex md:flex-col justify-center items-center absolute left-[10%] -space-y-[1]">
          <div className="w-24 h-24 md:w-48 md:h-48 flex justify-center items-center z-20">
            <img
              src={Image1}
              alt="SuiPunk 1"
              className="w-full h-full object-contain animate-flag-flap"
            />
          </div>
          <div className="w-24 h-24 md:w-52 md:h-52 flex justify-center items-center z-10 -translate-x-20">
            <img
              src={Image2}
              alt="SuiPunk 2"
              className="w-full h-full object-contain animate-flag-flap"
            />
          </div>
          <div className="w-24 h-24 md:w-52 md:h-52 flex justify-center items-center z-20">
            <img
              src={Image3}
              alt="SuiPunk 3"
              className="w-full h-full object-contain animate-flag-flap"
            />
          </div>
        </div>

        {/* Mobile Images */}
        <div className="md:hidden grid grid-cols-2 gap-4 justify-center items-center">
          <div className="w-16 h-16 flex justify-center items-center">
            <img
              src={Image1}
              alt="SuiPunk 1"
              className="object-contain animate-flag-flap"
            />
          </div>
          <div className="w-16 h-16 flex justify-center items-center">
            <img
              src={Image4}
              alt="SuiPunk 4"
              className="object-contain animate-flag-flap"
            />
          </div>
          <div className="w-16 h-16 flex justify-center items-center">
            <img
              src={Image2}
              alt="SuiPunk 2"
              className="object-contain animate-flag-flap"
            />
          </div>
          <div className="w-16 h-16 flex justify-center items-center">
            <img
              src={Image5}
              alt="SuiPunk 5"
              className="object-contain animate-flag-flap"
            />
          </div>
          <div className="w-16 h-16 flex justify-center items-center">
            <img
              src={Image3}
              alt="SuiPunk 3"
              className="object-contain animate-flag-flap"
            />
          </div>
          <div className="w-16 h-16 flex justify-center items-center">
            <img
              src={Image6}
              alt="SuiPunk 6"
              className="object-contain animate-flag-flap"
            />
          </div>
        </div>

        {/* Center Section */}
        <div className="flex flex-col items-center space-y-6 md:space-y-4">
          {/* Text */}
          <div className="text-center space-y-6 z-10 mt-3 max-w-2xl px-4">
            <span className="bg-[#232228] px-3 py-1 rounded-full text-xs md:text-xl">
              Join the Next Wave of Digital Expression!
            </span>
            <h1 className="text-3xl md:text-5xl font-bold mb-4 font-heading">
              SuiPunks
            </h1>
            <p className="text-sm md:text-2xl mb-4 text-wrap text-white font-custom">
              Step into the world of Sui Punks, where bold, original designs
              redefine creativity. Each Sui Punk is a unique work of art,
              crafted to push boundaries and inspire individuality.
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-col md:flex-row justify-center gap-4">
            {/* Telegram Button */}
            <a
              href="https://t.me/PUNKCTOONSUI"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="bg-[#304FFF] px-4 py-2 text-white text-xs md:text-xl w-36 md:w-52">
                Join our Telegram
              </button>
            </a>

            {/* Discord Button */}
            <a
              href="https://x.com/PunkNFTsOnSui"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="bg-white text-[#304FFF] px-4 py-2 text-xs md:text-xl w-36 md:w-52">
                Follow us on X
              </button>
            </a>
          </div>
        </div>

        {/* Right Side Images for Desktop */}
        <div className="hidden md:flex md:flex-col justify-center items-center absolute right-[10%] space-y-[1%]">
          <div className="w-24 h-24 md:w-48 md:h-48 flex justify-center items-center z-10">
            <img
              src={Image4}
              alt="SuiPunk 4"
              className="w-full h-full object-contain animate-flag-flap"
            />
          </div>
          <div className="w-24 h-24 md:w-48 md:h-48 flex justify-center items-center z-20 translate-x-20">
            <img
              src={Image5}
              alt="SuiPunk 5"
              className="w-full h-full object-contain animate-flag-flap"
            />
          </div>
          <div className="w-24 h-24 md:w-48 md:h-48 flex justify-center items-center z-10">
            <img
              src={Image6}
              alt="SuiPunk 6"
              className="w-full h-full object-contain animate-flag-flap"
            />
          </div>
        </div>
      </main>

      {/* About Us Section */}
      <section
        id="about-us"
        className="relative py-12 md:py-20"
        style={{
          backgroundImage: 'url("src/assets/images/Rectangle4.svg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Arrow */}
        <div className="flex items-center justify-center absolute top-[-10%] left-[45%] md:left-[50%] w-10 h-10 md:w-16 md:h-16 bg-[#304FFF]">
          <a href="#about-us">
            <img src={Arrow} alt="arrow" className="w-10 md:w-16" />
          </a>
        </div>

        {/* White Rectangles */}
        <div className="hidden md:block absolute top-[2%] left-[5%] w-10 h-10 md:w-20 md:h-20 bg-white"></div>
        <div className="hidden md:block absolute top-[-8%] left-[10%] w-8 h-8 md:w-14 md:h-14 bg-white"></div>

        <div className="max-w-6xl mx-auto text-center relative z-10 px-4">
          {/* Heading */}
          <h2 className="text-white text-3xl md:text-5xl font-bold mb-4 md:mb-8 font-heading">
            About SuiPunks
          </h2>

          {/* Image */}
          <div className="flex justify-center mb-6 md:mb-8">
            <img
              src={Image2}
              alt="SuiPunk Avatar"
              className="w-24 h-24 md:w-48 md:h-48 object-contain border-2 md:border-4 border-white"
            />
          </div>

          {/* Description */}
          <p className="text-sm md:text-lg text-white max-w-xl md:max-w-2xl mx-auto font-custom">
            Step into the world of Sui Punks, where bold, original designs
            redefine creativity. Each Sui Punk is a unique work of art, crafted
            to inspire individuality. Collect, trade, and showcase your Sui Punk
            as part of an exclusive community that celebrates artistic freedom.
          </p>
        </div>
      </section>

      {/* Team Section */}
      <section
        id="team"
        className="py-12 md:py-20 bg-custom-gradient text-white"
      >
        {/* Top Section: Centered Title and Description */}
        <div className="text-center mb-8 px-4">
          <h1 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4 font-heading leading-snug md:leading-tight">
            Embrace the Future of Digital Freedom{" "}
            <br className="hidden md:block" />
            and Exclusive Art
          </h1>

          <p className="text-white max-w-lg md:max-w-2xl mx-auto text-sm md:text-md leading-relaxed font-custom">
            Welcome to the world of Sui Punks, where pixelated rebellion meets
            blockchain innovation. <br className="hidden md:block" />
            Dive into a unique collection of generative NFT punks, each crafted
            to embody the spirit of digital freedom. Own a piece of this
            exclusive, decentralized movement and become part of a community
            that values art, rarity, and the power of the blockchain.
          </p>
        </div>

        {/* Bottom Section: Two Columns (Text on Left, Image on Right) */}
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:mt-32 md:flex-row items-center md:items-start relative">
          {/* Left Column: Text */}
          <div className="md:w-1/2 text-center md:text-left md:ml-20 mb-8 md:mb-0">
            <h2 className="text-xl md:text-4xl font-bold mb-4 md:mb-6 leading-snug md:leading-snug tracking-tight font-heading">
              <span className="block">Unleash Your Digital</span>
              <span className="block">Identity with Sui</span>
              <span className="block">Punks: A New Era</span>
              <span className="hidden md:block">of NFT</span>
            </h2>
          </div>

          {/* Right Column: Image */}
          <div className="md:w-1/2 flex justify-center md:justify-end relative">
            <img
              src={Image8}
              alt="SuiPunk Character"
              className="object-contain absolute right-[80%] -top-3 md:-top-28 md:right-[68%] w-16 h-16 md:w-[200px] md:h-[200px]"
            />
            <img
              src={Image7}
              alt="SuiPunk Character"
              className="w-40 h-40 md:w-[635px] md:h-[468px] object-contain ml-[10%] md:ml-[20%]"
            />
          </div>
        </div>
      </section>

      {/* Collection Section */}
      <section id="collection" className="py-12 md:py-20 bg-custom-gradient">
        <div className="max-w-6xl mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 md:mb-8 font-heading">
            SuiPunks Collections
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8 mx-5 md:mx-0">
            {/* Collection Items */}
            <img
              src={Image9}
              alt="SuiPunk Collection 1"
              className="w-full h-40 md:h-64 object-cover animate-fade-in-opacity animate-float animate-delay-100"
            />
            <img
              src={Image11}
              alt="SuiPunk Collection 2"
              className="w-full h-40 md:h-64 object-cover animate-fade-in-opacity animate-float animate-delay-200"
            />
            <img
              src={Image6}
              alt="SuiPunk Collection 3"
              className="w-full h-40 md:h-64 object-cover animate-fade-in-opacity animate-float animate-delay-300"
            />
            <img
              src={Image10}
              alt="SuiPunk Collection 4"
              className="w-full h-40 md:h-64 object-cover animate-fade-in-opacity animate-float animate-delay-400"
            />
            <img
              src={Image1}
              alt="SuiPunk Collection 5"
              className="w-full h-40 md:h-64 object-cover animate-fade-in-opacity animate-float animate-delay-500"
            />
            <img
              src={Image2}
              alt="SuiPunk Collection 6"
              className="w-full h-40 md:h-64 object-cover animate-fade-in-opacity animate-float animate-delay-100"
            />
            <img
              src={Image3}
              alt="SuiPunk Collection 7"
              className="w-full h-40 md:h-64 object-cover animate-fade-in-opacity animate-float animate-delay-200"
            />
            <img
              src={Image4}
              alt="SuiPunk Collection 8"
              className="w-full h-40 md:h-64 object-cover animate-fade-in-opacity animate-float animate-delay-300"
            />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-12 md:py-20 bg-custom-gradient">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-2xl md:text-4xl font-bold mb-6 md:mb-8 font-heading">
            FAQ
          </h2>
          <p className="text-sm md:text-xl mb-4 font-custom">
            Enter your email to subscribe and never miss any information about
            our NFT
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full text-gray-800 md:w-[550px] p-2 md:p-4 text-sm md:text-base"
              placeholder="Your Email"
            />
            <button
              onClick={handleSubmit}
              className="text-white bg-[#304FFF] px-4 py-2 md:px-6 md:py-4 w-full md:w-40 font-custom text-sm md:text-base"
            >
              Submit
            </button>
          </div>
          {message && <p>{message}</p>}
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Hero;
