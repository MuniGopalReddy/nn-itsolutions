
import { FaLaptopCode} from "react-icons/fa";

export default function Courses() {
const courses = [
"Java (Core & Advanced)",
"Angular",
"Python",
"Manual & Automation Testing",
"GEN AI (Free)",
"MS Office",
"Web Design",
"C, C++",
"DevOps",
"Cloud"
];


return (
<section id="courses" className="py-16 px-6 bg-gray-100">
<h2 className="text-3xl font-bold text-center mb-10">Courses We Offer</h2>
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
{courses.map((course, i) => (
<div key={i} className="bg-white shadow-md rounded-lg p-6 text-center hover:shadow-xl transition">
<FaLaptopCode className="text-blue-900 text-4xl mx-auto mb-4" />
<p className="font-semibold">{course}</p>
</div>
))}
</div>
</section>
);
}