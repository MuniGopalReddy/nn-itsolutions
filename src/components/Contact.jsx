import { FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
export default function Contact() {
return (
<section id="contact" className="py-16 px-6">
<h2 className="text-3xl font-bold text-center mb-10">Contact Us</h2>
<div className="max-w-3xl mx-auto bg-white shadow-lg p-8 rounded-lg text-center">
<p className="flex items-center justify-center mb-4 text-lg"><FaPhoneAlt className="mr-2 text-blue-900" /> 8374837527</p>
<p className="flex items-center justify-center text-lg"><FaMapMarkerAlt className="mr-2 text-blue-900" /> Upstairs Kissan Supermarket, First Floor, Beside Sai Baba Temple, SHAR Road, Sullurpet, Tirupati Dt, Andhra Pradesh – 524121</p>
</div>
</section>
);
}