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
import LeadershipSection from "./com/LeadershipSection";

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
            Pick a time that works best for you - quick, easy, and fully online.
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

      {/* Leadership Section */}
      <LeadershipSection />

      <FAQ />
      <WhyChooseUs />
      <ContactInfo />
      <Footer />
    </main>
  );
}