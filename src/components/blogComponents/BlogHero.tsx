'use client'

export default function BlogHero() {
    return (
        <section className="py-20 px-6 bg-gradient-to-br from-blue-300 via-blue-400 to-purple-500 text-white text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto z-10 relative">
            <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">
            Bienvenidos a <span className="italic text-black-300">El Blog de Eloisa</span>
            </h1>
            <p className="text-lg sm:text-xl text-purple-100 mb-8 max-w-xl mx-auto">
            Inglés útil del día a día ✨ Tips, recursos, curiosidades y consejos para mejorar tu inglés mientras te diviertes.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
            <span className="bg-white/20 text-sm px-4 py-2 rounded-full font-medium">Tips</span>
            <span className="bg-white/20 text-sm px-4 py-2 rounded-full font-medium">Advice</span>
            <span className="bg-white/20 text-sm px-4 py-2 rounded-full font-medium">Fun facts</span>
            <span className="bg-white/20 text-sm px-4 py-2 rounded-full font-medium">Culture</span>
            </div>
        </div>

        {/* Decoraciones flotantes opcionales */}
        <div className="absolute top-4 left-6 text-xl">📘</div>
        <div className="absolute bottom-8 right-8 text-2xl">🌍</div>
        <div className="absolute top-1/2 left-1/3 transform -translate-y-1/2 text-3xl opacity-10">🛫</div>
        </section>
    )
}
