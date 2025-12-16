import { MapPin, Phone, Mail } from "lucide-react";

export default function ContactInfo() {
  return (
    <section
      id="contactinfo"
      className="py-16 scroll-mt-24 bg-gradient-to-b from-gray-100 to-gray-200"
    >
      <div className="max-w-4xl mx-auto bg-[#061A33] text-white rounded-xl p-8 shadow-lg">
        {/* Heading */}
        <h2 className="text-4xl md:text-3xl font-bold text-center mb-8">
          Contact Us
        </h2>

        {/* Horizontal Contact Details */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-base md:text-lg">
          {/* Location */}
          <div className="flex items-center gap-2">
            <MapPin className="text-yellow-400 w-5 h-5" />
            <span>Hyderabad, India</span>
          </div>

          {/* Phone */}
          <div className="flex items-center gap-2">
            <Phone className="text-yellow-400 w-5 h-5" />
            <span>+91 8523817445</span>
          </div>

          {/* Email */}
          <div className="flex items-center gap-2">
            <Mail className="text-yellow-400 w-5 h-5" />
            <span className="break-all">
              connect@orbitalpaintsolutions.com
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
