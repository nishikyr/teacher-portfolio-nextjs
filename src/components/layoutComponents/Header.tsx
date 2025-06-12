// src/components/layoutComponents/Header.tsx
'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'

const navItems = [
    { label: 'Home', href: '/', current: true },
    { label: 'Teaching Portfolio', href: '/teaching' },
    { label: 'Servicios', href: '/services' },
    { label: 'Blog', href: '/blog' },
]

export default function Header() {
    const pathname = usePathname()

    return (
        <header className="py-6 text-center">
        <nav className="flex justify-center gap-4 flex-wrap">
            {navItems.map(({ label, href }) => (
            <Link
                key={href}
                href={href}
                className={clsx(
                'px-6 py-2 rounded-full font-semibold shadow',
                pathname === href
                    ? 'bg-yellow-200 text-black'
                    : 'bg-white/80 text-black hover:bg-white transition'
                )}
            >
                {label}
            </Link>
            ))}
        </nav>
        </header>
    )
}
