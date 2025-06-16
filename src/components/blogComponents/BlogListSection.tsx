'use client'
import { useState } from "react"
import { blogPosts } from "@/data/blogPosts"
import IBlogPost from "@/models/IBlogPost"
import Image from "next/image"

export default function BlogListSection() {
    const [categoriaActiva, setCategoriaActiva] = useState<string | null>(null)

    const categoriasUnicas = Array.from(new Set(blogPosts.map(p => p.category)))

    const filtrados = categoriaActiva
        ? blogPosts.filter(p => p.category === categoriaActiva)
        : blogPosts

    return (
        <section className="bg-white px-4 py-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">

            {/* == Categorias == */}
            <aside className="md:col-span-1">
                <h3 className="text-xl font-bold mb-4">Categorías</h3>
                <div className="flex flex-wrap gap-2">
                    {categoriasUnicas.map(cat => (
                    <button
                        key={cat}
                        onClick={() => setCategoriaActiva(c => (c === cat ? null : cat))}
                        className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm border transition
                        ${
                            categoriaActiva === cat
                            ? "bg-blue-600 text-white font-semibold"
                            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                        }
                        `}
                    >
                        {categoriaActiva === cat && (
                        <span className="text-white text-xs">✔</span>
                        )}
                        {cat}
                    </button>
                    ))}

                    {categoriaActiva && (
                    <button
                        onClick={() => setCategoriaActiva(null)}
                        className="flex items-center gap-2 px-4 py-2 bg-gray-200 text-gray-800 text-sm rounded-full border hover:bg-gray-300 transition"
                    >
                        <span className="text-black text-xs">✖</span>
                        Clear
                    </button>
                    )}
                </div>
            </aside>


            {/* == Posts == */}
            <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtrados.map(post => (
                <div key={post.id} className="bg-white rounded-xl shadow p-4 hover:shadow-lg transition">
                <Image
                    src={post.imageUrl}
                    alt={post.title}
                    width={400}
                    height={250}
                    className="rounded-md w-full h-48 object-cover mb-4"
                />
                <span className="text-xs font-semibold text-blue-600 uppercase">{post.category}</span>
                <h3 className="text-lg font-bold mt-1 mb-2">{post.title}</h3>
                <p className="text-sm text-gray-600 mb-3">{post.summary}</p>
                <div className="text-xs text-gray-500 flex justify-between items-center">
                    <span>{new Date(post.date).toLocaleDateString()}</span>
                    <span>{post.readTime}</span>
                </div>
                </div>
            ))}
            </div>
        </div>
        </section>
    )
}
