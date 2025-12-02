"use client";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import WhatWeDo from "./components/WhatWeDo";
import Services from "./components/Services";
import Courses from "./components/Courses";
import Mission from "./components/Mission";
import Contact from "./components/Contact";
import ContactInfo from "./components/ContactInfo";
import WhyLearn from "./components/WhyLearn";
import FAQ from "./components/FAQ";
import WhyChooseUs from "./components/WhyChooseUs";
import Footer from "./components/Footer";
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
      <ContactInfo />
      <WhyLearn />
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
            href="https://calendly.com/prakash-connect06/30min" // ⬅ Replace this with your real Calendly link
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white text-lg font-semibold px-8 py-4 rounded-full transition-all duration-300 shadow-md hover:shadow-xl transform hover:scale-105"
          >
            Book an Appointment
          </a>

          <p className="mt-6 text-gray-500 text-sm leading-relaxed">
            Once you click the button, you'll be redirected to Calendly where you can
            choose your preferred date & time. Our team will confirm the appointment instantly.
          </p>

        </div>
      </section>
    <section className="w-full py-20 px-6 bg-white">
  <div
    className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10 
               opacity-0 animate-fadeInUp"
  >
    {/* Founder Image */}
    <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden shadow-xl">
      <img
        src="/founder.png"  
        alt="Founder"
        className="w-full h-full object-cover"
      />
    </div>

    {/* Text */}
    <div className="flex-1 text-center md:text-left">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
        Founder’s Talk
      </h2>

      <p className="text-gray-600 text-lg italic leading-relaxed mb-6">
        "In aerospace, precision isn’t a choice - it’s a promise. 
        At OrbitalPaint Solutions, we don’t just coat the surface; we craft protection that takes flight."
      </p>

      <h3 className="text-xl font-semibold text-gray-900">
        — Mirzasayeed Beg, Founder & COO
        </h3>
      </div>
     </div>
     </section>
       <FAQ />
      <WhyChooseUs />
      <Footer />
    </main>
  );
}

