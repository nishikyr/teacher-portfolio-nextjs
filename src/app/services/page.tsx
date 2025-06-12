'use client'
import { useState } from 'react'
import { services } from '@/data/servicios'
import ITeachingServices from '@/models/ITeachingServices'
import MaterialsSection from '@/components/servicesComponents/MaterialsSection'

export default function ServicesSection() {
    const [categoriaActiva, setCategoriaActiva] = useState<string | null>(null)

    // Obtener todas las categorías únicas
    const categoriasUnicas = Array.from(new Set(services.map(s => s.categoria)))

    // Filtrar servicios por categoría seleccionada
    const serviciosFiltrados: ITeachingServices[] = categoriaActiva
        ? services.filter(s => s.categoria === categoriaActiva)
        : services

    return (
        <>
            <section className="py-20 px-6 bg-white text-center">
            <h2 className="text-4xl font-bold mb-10">Servicios disponibles</h2>

            {/* Botones de categoría */}
            <div className="flex flex-wrap gap-3 justify-center mb-10">
                {categoriasUnicas.map((cat) => (
                <button
                    key={cat}
                    onClick={() => setCategoriaActiva(c => (c === cat ? null : cat))}
                    className={`px-4 py-2 rounded-full border ${
                    categoriaActiva === cat
                        ? 'bg-blue-600 text-white'
                        : 'bg-white text-gray-700 hover:bg-blue-100'
                    } transition`}
                >
                    {cat}
                </button>
                ))}
            </div>

            {/* Cursos filtrados */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto text-left">
                {serviciosFiltrados.map((s, i) => (
                <div key={i} className="bg-gray-50 p-6 rounded-2xl shadow-md flex flex-col justify-between">
                    <div>
                    <span className="inline-block text-xs mb-2 text-blue-500 font-semibold uppercase tracking-wide">
                        {s.categoria}
                    </span>
                    <h3 className="text-xl font-bold mb-2">{s.title}</h3>
                    <p className="text-sm text-gray-700 mb-4">{s.description}</p>
                    </div>

                    <div className="mt-auto text-right text-sm text-gray-500 italic">
                    Nivel: {s.nivel} — {s.estudiantes}+ alumnos
                    </div>
                </div>
                ))}
            </div>
            </section>

            {/* Materiales recomendados */}
            <MaterialsSection />
        </>
        
    )
}
