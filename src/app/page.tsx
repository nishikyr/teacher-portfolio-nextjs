'use client';
import Image from "next/image";
import { useEffect, useState } from "react";
import EloisaImg from '../../public/Eloisa.jpg'; // Asegúrate de que la ruta sea correcta
import ServicesSection from "@/components/homeComponents/ServicesSection";
import TestimonialsSection from "@/components/homeComponents/TestimonialsSection";

export default function Home() {
  const palabras = ['en tus horarios', 'con confianza', 'con resultados reales', 'a tu manera', 'desde casa']
  const [index, setIndex] = useState(0);

  useEffect( () => {
    const interval = setInterval( () => {
      setIndex((prevIndex) => (prevIndex + 1) % palabras.length);
      
    }, 3000) // Cambio cada 2 segundos
    return () => clearInterval(interval); // Limpiar el intervalo al desmontar el componente
  }, [])

  return (
    <>
      {/* HERO CON PALABRAS ROTADORAS */}
      <section className="h-screen bg-gradient-to-br from-orange-300 to-orange-100 flex items-center justify-center px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* TEXTO */}
          <div className="text-center md:text-left">
            <h1 className="text-5xl font-extrabold text-gray-800 leading-snug mb-4">
              Domina el inglés que realmente necesitas {' '}
              <span key={palabras[index]} 
                    className="text-pink-600 italic inline-block animate-slide-fade">
                {palabras[index]}
              </span>
            </h1>
            <p className="text-lg text-gray-700 mt-4 max-w-md">
              🌍 El inglés es la llave que te conecta con el mundo. Aprende con confianza y diviértete en el camino.
            </p>
            <button className="mt-6 px-6 py-3 bg-pink-600 text-white font-semibold rounded-full hover:bg-pink-700 transition">
              Empezar ahora 🚀
            </button>
          </div>

          {/* IMAGEN DE LA PROFESORA */}
          <div className="flex justify-center md:justify-end">
            <Image
              src={EloisaImg}
              alt="Teacher Mae"
              width={400}
              height={400}
              className="rounded-xl shadow-lg"
              priority
            />
          </div>
        </div>
      </section>

      {/* RESTO IGUAL */}
      {/* Services Section Component */}
      <ServicesSection />


      {/* Testimonios en Inglés y Español */}
      <TestimonialsSection />
    </>
  )
}
