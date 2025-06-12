'use client'
import { materials } from '@/data/materials'

export default function MaterialsSection() {
    return (
        <section className="py-20 px-6 bg-gray-50 text-center">
        <h2 className="text-3xl font-bold mb-8">📚 Recomendaciones de Teacher Eloisa</h2>
        <p className="text-gray-600 mb-12 max-w-xl mx-auto">
            Aquí tienes algunos materiales y recursos favoritos que recomiendo a todos mis estudiantes. Son ideales para practicar, aprender y mejorar tu inglés desde casa.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto text-left">
            {materials.map((m, i) => (
            <a
                key={i}
                href={m.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition block"
            >
                {m.imagen && (
                <img
                    src={m.imagen}
                    alt={m.titulo}
                    className="w-full h-36 object-contain mb-4"
                />
                )}
                <span className="text-xs uppercase text-blue-500 font-semibold">{m.tipo}</span>
                <h3 className="text-lg font-bold mt-2 mb-2">{m.titulo}</h3>
                <p className="text-sm text-gray-600">{m.descripcion}</p>
            </a>
            ))}
        </div>
        </section>
    )
}
