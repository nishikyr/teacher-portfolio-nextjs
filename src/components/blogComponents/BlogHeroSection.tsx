'use client'
import { blogPosts } from '@/data/blogPosts'
import IBlogPost from '@/models/IBlogPost'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import Image from 'next/image'
import Link from 'next/link'

export default function BlogHeroSection() {
    return (
        <section className="bg-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
            <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            pagination={{ clickable: true }}
            autoplay={{ delay: 4000 }}
            loop
            spaceBetween={40}
            >
            {blogPosts.map((post) => (
                <SwiperSlide key={post.id}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                    {/* TEXT */}
                    <div>
                    <span className="inline-block bg-white text-blue-700 font-semibold text-xs px-3 py-1 rounded-full uppercase mb-4">
                        {post.category}
                    </span>
                    <h2 className="text-4xl font-bold mb-4">{post.title}</h2>
                    <p className="mb-6">{post.description}</p>
                    <div className="text-sm opacity-70 mb-6">
                        {new Date(post.date).toLocaleDateString()} • {post.readTime}
                    </div>
                    <Link
                        href={post.link}
                        className="inline-block bg-white text-blue-700 font-semibold px-5 py-2 rounded-full hover:bg-blue-100 transition"
                    >
                        Ver artículo →
                    </Link>
                    </div>

                    {/* IMAGE */}
                    <div className="flex justify-center">
                    <Image
                        src={post.imageUrl}
                        alt={post.title}
                        width={500}
                        height={300}
                        className="rounded-xl shadow-lg"
                    />
                    </div>
                </div>
                </SwiperSlide>
            ))}
            </Swiper>
        </div>
        </section>
    )
}
