import { useState } from "react";



export default function Navbar() {
const [isOpen, setIsOpen] = useState(false);
return (
<nav className="bg-blue-900 text-white px-6 py-4 flex justify-between items-center sticky top-0 z-50">
<h1 className="text-2xl font-bold">NN-IT Solutions</h1>
<div className="hidden md:flex gap-6">
<a href="#home" className="hover:text-yellow-400">Home</a>
<a href="#courses" className="hover:text-yellow-400">Courses</a>
<a href="#benefits" className="hover:text-yellow-400">Benefits</a>
<a href="#enroll" className="hover:text-yellow-400">Who Can Enroll</a>
<a href="#contact" className="hover:text-yellow-400">Contact</a>
</div>
<button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
☰
</button>
{isOpen && (
<div className="absolute bg-blue-800 top-16 left-0 w-full flex flex-col gap-4 p-6 md:hidden">
<a href="#home">Home</a>
<a href="#courses">Courses</a>
<a href="#benefits">Benefits</a>
<a href="#enroll">Who Can Enroll</a>
<a href="#contact">Contact</a>
</div>
)}
</nav>
);
}