import { MapPin, Phone, Mail } from "lucide-react";

export default function ContactInfo() {
  return (
    <section
      id="contactinfo"
      className="py-20 scroll-mt-24 bg-gradient-to-b from-gray-100 to-gray-200"
    >
      <div className="max-w-4xl mx-auto bg-[#061A33] text-white rounded-2xl p-10 shadow-xl">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
          Contact Us
        </h2>

        {/* Contact Details */}
        <div className="space-y-6 text-center text-lg">
          <div className="flex items-center justify-center gap-3">
            <MapPin className="text-yellow-400 w-6 h-6" />
            <span>Hyderabad, India</span>
          </div>

          <div className="flex items-center justify-center gap-3">
            <Phone className="text-yellow-400 w-6 h-6" />
            <span>+91 8523817445</span>
          </div>

          <div className="flex items-center justify-center gap-3">
            <Mail className="text-yellow-400 w-6 h-6" />
            <span className="break-all">
              connect@orbitalpaintsolutions.com
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
