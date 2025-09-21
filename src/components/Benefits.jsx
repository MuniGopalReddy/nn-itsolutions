import { FaChalkboardTeacher } from "react-icons/fa";

export default function Benefits() {
const benefits = [
"12+ years Realtime Experienced Trainers",
"Live Online/Offline Classes in Telugu / English",
"100% Placement Assistance",
"Mock Interviews",
"Real Time Experienced Knowledge",
"Live Projects",
"5-10 Students per Batch",
"One to One Mentoring",
"Group Discussions",
"Professional Resume Building"
];


return (
<section id="benefits" className="py-16 px-6">
<h2 className="text-3xl font-bold text-center mb-10">Benefits</h2>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
{benefits.map((b, i) => (
<div key={i} className="bg-blue-50 p-6 rounded-lg shadow hover:shadow-lg">
<FaChalkboardTeacher className="text-blue-900 text-3xl mb-3" />
<p>{b}</p>
</div>
))}
</div>
</section>
);
}