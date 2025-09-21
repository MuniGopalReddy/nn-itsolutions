import { FaUserGraduate } from "react-icons/fa";

export default function Enroll() {
const who = [
"Any Graduate (BE/B.Tech, Degree, MBA)",
"IT/Non-IT Professionals",
"Career Gap Students",
"Freshers"
];


return (
<section id="enroll" className="py-16 px-6 bg-gray-100">
<h2 className="text-3xl font-bold text-center mb-10">Who Can Enroll?</h2>
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
{who.map((w, i) => (
<div key={i} className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-xl">
<FaUserGraduate className="text-blue-900 text-4xl mx-auto mb-4" />
<p>{w}</p>
</div>
))}
</div>
</section>
);
}