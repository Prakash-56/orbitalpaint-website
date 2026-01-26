"use client";
import Navbar from "./com/Navbar";
import Hero from "./com/Hero";
import About from "./com/About";
import WhatWeDo from "./com/WhatWeDo";
import Services from "./com/Services";
import Courses from "./com/Courses";
import Mission from "./com/Mission";
import Contact from "./com/Contact";
import WhyLearn from "./com/WhyLearn";
import FAQ from "./com/FAQ";
import WhyChooseUs from "./com/WhyChooseUs";
import ContactInfo from "./com/ContactInfo";
import Footer from "./com/Footer";

export default function Home() {
  return (
    <main className="content-with-top-menu">
      <Navbar />
      <Hero />
      <About />
      <WhatWeDo />
      <Services />
      <Courses />
      <Mission />
      <Contact />
      <WhyLearn />

      {/* Appointment Section */}
      <section className="w-full mt-16 bg-gray-100 py-14 px-6 rounded-2xl shadow-lg">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Schedule an Appointment
          </h2>

          <p className="text-gray-600 text-lg md:text-xl mb-8">
            Schedule a professional site visit or consultation with Orbital Paint Solutions.
            Pick a time that works best for you — quick, easy, and fully online.
          </p>

          <a
            href="https://calendly.com/orbitalpaintsolutions"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#1E40AF] hover:bg-[#1D4ED8]
                       text-white text-lg font-semibold
                       px-8 py-4 rounded-full
                       transition-all duration-300
                       shadow-md hover:shadow-xl
                       transform hover:scale-105"
          >
            Book an Appointment
          </a>

          <p className="mt-6 text-gray-500 text-sm leading-relaxed">
            Once you click the button, you'll be redirected to Calendly where you can
            choose your preferred date & time. Our team will confirm the appointment instantly.
          </p>
        </div>
      </section>

{/* Founder Talk Section */}
<section className="w-full py-20 px-6 bg-white">
  <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10 opacity-0 animate-fadeInUp">

    {/* Founder Image + Button */}
    <div className="flex flex-col items-center">

      {/* Image */}
      <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden shadow-xl">
        <img
          src="/founder.png"
          alt="Founder"
          className="w-full h-full object-cover"
        />
      </div>

      {/* LinkedIn Button */}
      <a
        href="https://www.linkedin.com/in/mirzasayeed-beg-9487212a9/"
        target="_blank"
        rel="noopener noreferrer"
        className="
          mt-4
          inline-flex items-center gap-2
          px-6 py-2 rounded-full
          bg-[#0A66C2] hover:bg-[#004182]
          text-white font-semibold
          shadow-lg
          transition-all duration-300 transform hover:scale-105
        "
      >
        {/* LinkedIn Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="18"
          height="18"
          fill="white"
        >
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.049c.476-.9 1.637-1.85 3.368-1.85 3.6 0 4.266 2.368 4.266 5.451v6.29zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM6.814 20.452H3.86V9h2.954v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.727v20.545C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.273V1.727C24 .774 23.2 0 22.222 0z"/>
        </svg>
        Connect on LinkedIn
      </a>

    </div>

    {/* Text */}
    <div className="flex-1 text-center md:text-left">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
        Founder’s Talk
      </h2>

      <p className="text-gray-600 text-lg italic leading-relaxed mb-6">
        "In aerospace, precision isn’t a choice - it’s a promise.
        At OrbitalPaint Solutions, we don’t just coat the surface;
        we craft protection that takes flight."
      </p>

      <h3 className="text-xl font-semibold text-gray-900">
        - Mirzasayeed Beg, Founder & COO
      </h3>
    </div>

  </div>
</section>
      <FAQ />
      <WhyChooseUs />
      <ContactInfo />
      <Footer />
    </main>
  );
}
