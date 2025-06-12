'use client'
import { testimonials } from '@/data/testimonials'
import { FaQuoteLeft, FaStar } from 'react-icons/fa6'

export default function TestimonialsSection() {
    // duplicamos el array para hacer scroll continuo sin cortar
    const scrollTestimonials = testimonials.concat(testimonials)
    return (
        <section className="py-20 px-6 bg-neutral-50 text-center overflow-hidden">
        <h2 className="text-4xl font-bold mb-12">
            Kind words from <span className="text-purple-600">🙂 my lovely students</span>
        </h2>

        <div className="relative w-full overflow-hidden">
            <div className="flex items-stretch animate-marquee space-x-8 hover:[animation-play-state:paused] px-4">
            {scrollTestimonials.map((t, index) => (
                <div
                key={index}
                className="min-w-[320px] max-w-xs mb-2 bg-white rounded-3xl shadow-md p-6 text-left flex-shrink-0"
                >
                <FaQuoteLeft className="text-purple-300 text-3xl mb-4" />

                <h3 className="text-lg font-semibold mb-2">{t.titulo}</h3>
                <p className="text-gray-700 mb-4">{t.texto}</p>

                <div className="flex gap-1 text-yellow-400 mb-4">
                    {Array(5)
                    .fill(0)
                    .map((_, i) => (
                        <FaStar key={i} />
                    ))}
                </div>

                <div className="flex items-center gap-3 mt-auto">
                    {t.avatar ? (
                    <img src={t.avatar} alt={t.nombre} className="..." />
                    ) : (
                    <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-xl">
                        {t.emoji}
                    </div>
                    )}
                    <div>
                    <p className="font-bold">{t.nombre}</p>
                    <p className="text-sm text-gray-500">{t.pais || 'Spain'}</p>
                    </div>
                </div>
                </div>
            ))}
            </div>
        </div>
        </section>
    )
}
