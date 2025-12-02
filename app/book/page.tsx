// app/book/page.tsx
import Header from "../../com/Header";
import Footer from "../../com/Footer";

export default function Book() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#F8FAFC] p-6 lg:p-20">
        <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg">
          <h1 className="text-2xl font-bold text-[#0A1F44] mb-4">Book an Appointment</h1>
          <p className="mb-6">Schedule a meeting with our team. (Calendly demo)</p>

          <div className="w-full h-[650px]">
            {/* Replace src with your Calendly public link */}
            <iframe src="https://calendly.com/" className="w-full h-full border rounded" />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
