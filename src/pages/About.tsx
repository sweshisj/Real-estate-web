import Navbar from "../components/Navbar";
import { useRef } from "react";

function About() {
const Contactscroll = useRef<HTMLDivElement | null>(null);
function Contactus() {
Contactscroll.current?.scrollIntoView({ behavior: 'smooth' });
}
return (
<>
<Navbar />
<div className="max-w-4xl mt-20 mx-auto px-4 py-12">
{/* Hero Section */}
<section className="relative mb-12 rounded-lg overflow-hidden bg-gradient-to-r from-green-500 to-green-700 text-white p-8 text-center">
<div className="absolute opacity-10 inset-0 bg-[url('https://www.toptal.com/designers/subtlepatterns/patterns/double-bubble-outline.png')] bg-repeat"></div>
<h1 className="text-4xl font-bold mb-4 relative z-10">Welcome to Our Company</h1>
<p className="text-lg mb-6 relative z-10">Innovating, Empowering, and Growing Together.</p>
<div className="flex justify-center gap-8 mb-6 relative z-10 flex-wrap">
<div className="text-center">
<p className="text-3xl font-bold">100+</p>
<p className="text-sm uppercase tracking-wide">Projects Delivered</p>
</div>
<div className="text-center">
<p className="text-3xl font-bold">50+</p>
<p className="text-sm uppercase tracking-wide">Happy Clients</p>
</div>
<div className="text-center">
<p className="text-3xl font-bold">10</p>
<p className="text-sm uppercase tracking-wide">Awards Won</p>
</div>
</div>
<button onClick={Contactus} className="inline-block bg-white text-green-700 font-semibold px-5 py-2 hover:text-lg hover:rounded-lg rounded hover:bg-gray-100 hover:font-bold transition-all duration-300 relative z-10" >
Contact Us
</button>
</section>


    {/* Our Story */}
    <section className="mb-12">
      <h2 className="text-3xl font-bold mb-2">Our Story</h2>
      <p className="text-gray-500 font-medium">
        Founded in 2023, our company was created with the vision to bring exceptional digital experiences to people around the world.
        We believe in innovation, collaboration, and continuous growth.
      </p>
    </section>

    {/* Mission and Values */}
    <section className="mb-12">
      <h2 className="text-3xl font-bold mb-2">Our Mission</h2>
      <p className="text-gray-500 font-medium">
        Our mission is to deliver high-quality solutions that empower businesses and individuals to succeed in the digital age.
      </p>
    </section>

    {/* Team Section */}
    <section className="mb-12">
      <h2 className="text-3xl font-bold mb-4">Meet the Team</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white shadow-md p-4">
          <img
            src="https://images.unsplash.com/photo-1664575602554-2087b04935a5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmVtYWxlfGVufDB8fDB8fHww"
            alt=""
            className="w-80 h-30 mx-auto mb-2 object-cover"
          />
          <h3 className="text-lg font-bold">Fatima</h3>
          <p className="text-gray-500 text-sm font-medium">CEO</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-4">
          <img
            src="https://plus.unsplash.com/premium_photo-1664476788423-7899ac87bd7f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWFsZXxlbnwwfHwwfHx8MA%3D%3D"
            alt=""
            className="w-80 h-30 mx-auto mb-2 object-cover"
          />
          <h3 className="text-lg font-bold">John Smith</h3>
          <p className="text-gray-500 text-sm font-medium">CTO</p>
        </div>
        <div className="bg-white shadow-md p-4">
          <img
            src="https://plus.unsplash.com/premium_photo-1661277620927-6d5ec9540bb9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTM3fHxmZW1hbGV8ZW58MHx8MHx8fDA%3D"
            alt=""
            className="w-80 h-30 mx-auto mb-2 object-cover"
          />
          <h3 className="text-lg font-bold">Sarah Lee</h3>
          <p className="text-gray-500 text-sm font-medium">Lead Designer</p>
        </div>
      </div>
    </section>

    {/* Contact Us Section */}
    <section ref={Contactscroll} className="mt-12 border-t pt-8">
      <h2 className="text-3xl font-bold mb-4 text-green-700">Contact Us</h2>
      <p className="text-gray-500 font-medium mb-2">Have questions or want to work with us? We'd love to hear from you</p>
      <div className="text-gray-700 mt-4 flex flex-col gap-2">
        <p className="font-medium">
          <strong className="text-xl">Email :</strong> contact@yourcompany.com
        </p>
        <p className="font-medium">
          <strong className="text-xl">Phone :</strong> +1 (555) 123-4567
        </p>
        <p className="font-medium">
          <strong className="text-xl">Address :</strong> 123 Main Street, New York, NY, USA
        </p>
      </div>
    </section>
  </div>
</>
);
}

export default About;