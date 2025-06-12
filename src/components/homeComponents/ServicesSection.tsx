'use client';
import { services } from "@/data/servicios";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

export default function ServicesSection() {
    return (
        <section className="py-20 px-6 bg-white text-center">
        <h2 className="text-4xl font-bold mb-12">My Services</h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {services.map((service, index) => (
            <div
                key={index}
                className={`${service.color} rounded-3xl p-8 text-left flex flex-col justify-between shadow-md hover:scale-[1.02] transition-transform`}
            >
                <div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-base">{service.description}</p>
                </div>
                <div className="mt-6">
                <a
                    href="#"
                    className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/70 hover:bg-white text-inherit transition"
                >
                    <FaArrowUpRightFromSquare />
                </a>
                </div>
            </div>
            ))}
        </div>
        </section>
    )
}