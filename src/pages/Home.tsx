import { useRef } from "react";
import Navbar from "../components/Navbar";
import { FaBullhorn, FaCameraRetro, FaRocket } from "react-icons/fa";

function Home() {
const scrollref = useRef<HTMLDivElement | null>(null);

function scrollhandler() {
scrollref.current?.scrollIntoView({ behavior: "smooth" });
}

return (
<>
<Navbar />


  {/* Hero Section */}
  <div className="relative text-center h-[800px] flex justify-center items-center overflow-hidden">
    {/* Background Image */}
    <img
      src="https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=1950&q=80"
      alt="Modern home"
      className="absolute inset-0 w-full h-full object-cover transform scale-110 hover:scale-100 transition duration-500"
    />
    {/* Overlay */}
    <div className="absolute inset-0 bg-black/50"></div>

    {/* Content */}
    <div className="relative z-10 max-3xl px-4">
      <h1 className="text-4xl md:text-5xl font-bold text-white">Green Carpet</h1>
      <p className="sm:text-lg mt-6 sm:font-medium text-[12px] font-bold text-gray-200">
        We specialize in showcasing properties with powerful marketing strategies, compelling visuals, and innovative campaigns
        that help builders and agents reach the right buyers. From residential projects to luxury villas, we make your properties shine brighter
        in a competitive market.
      </p>
      <button
        onClick={scrollhandler}
        className="transition-all duration-300 bg-green-600 hover:bg-green-700 hover:px-6 hover:py-3 hover:rounded-lg text-white font-bold mt-6 px-5 py-2 rounded"
      >
        Click to Explore
      </button>
    </div>
  </div>

  {/* Features Section */}
  <div className="py-16 bg-white">
    <h2 className="text-3xl font-bold text-center text-green-700 mb-10">What Makes Us Different</h2>
    <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
      <div className="flex flex-col items-center text-center">
        <FaBullhorn className="text-green-600 text-5xl mb-4" />
        <h3 className="text-xl font-semibold mb-2">Powerful Promotion</h3>
        <p className="text-neutral-600">Innovative marketing campaigns that capture attention and drive results.</p>
      </div>
      <div className="flex flex-col items-center text-center">
        <FaCameraRetro className="text-green-600 text-5xl mb-4" />
        <h3 className="text-xl font-semibold mb-2">Stunning Visuals</h3>
        <p className="text-neutral-600">High-quality photos and videos that showcase your properties beautifully.</p>
      </div>
      <div className="flex flex-col items-center text-center">
        <FaRocket className="text-green-600 text-5xl mb-4" />
        <h3 className="text-xl font-semibold mb-2">Fast Results</h3>
        <p className="text-neutral-600">Agile execution that helps you stand out and sell faster.</p>
      </div>
    </div>
  </div>

  {/* Scroll Target Section */}
  <div ref={scrollref} className="relative w-full h-screen">
    <img className="w-full h-full object-cover" src="https://wallpaperaccess.com/full/4401183.jpg" alt="" />
    <div className="absolute inset-0 bg-black/60"></div>
    <div className="absolute inset-0 flex flex-col justify-center pl-8 pr-8">
      <h1 className="text-green-400 text-4xl md:text-6xl font-bold z-10">
        Build your dream project with <br /> confidence
      </h1>
      <p className="text-lg md:text-xl text-[12px] text-neutral-300 font-medium sm:font-medium sm:text-white mt-5 z-10">
        Whether you envision a modern villa, a serene family home, or a landmark development, Green Carpet brings your ideas to life.
        From innovative real estate promotions that captivate your audience to flawless project execution, we help
        you create spaces that inspire, attract, and stand the test of time.
        Because your dream deserves the perfect foundation.
      </p>
    </div>
  </div>

  {/* Trusted By Section */}
  <div className="py-12 bg-gray-100">
    <h2 className="text-2xl font-bold text-center text-green-700 mb-6">Our Valuable Clients</h2>
    <div className="flex justify-center flex-wrap gap-8">
      <img
        src="https://plus.unsplash.com/premium_photo-1682088156802-7a68b3e23f42?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2xpZW50JTIwcGhvdG98ZW58MHx8MHx8fDA%3D"
        alt="Client 1"
        className=" w-[200px] h-[100px] object-cover opacity-70 hover:opacity-100 transition"
      />
      <img
        src="https://images.unsplash.com/photo-1542596594-649edbc13630?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGhhcHB5JTIwY2xpZW50fGVufDB8fDB8fHww"
        alt="Client 2"
        className=" w-[200px] h-[100px] object-cover opacity-70 hover:opacity-100 transition"
      />
      <img
        src="https://plus.unsplash.com/premium_photo-1681827754595-b2a610e2adb3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fGhhcHB5JTIwcGVvcGxlfGVufDB8fDB8fHww"
        alt="Client 3"
        className=" w-[200px] h-[100px] object-cover opacity-70 hover:opacity-100 transition"
      />
      <img
        src="https://images.unsplash.com/photo-1541089404510-5c9a779841fc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fGhhcHB5JTIwcGVvcGxlfGVufDB8fDB8fHww"
        alt="Client 4"
        className=" w-[200px] h-[100px] object-cover opacity-70 hover:opacity-100 transition"
      />
    </div>
  </div>
</>
);
}

export default Home;