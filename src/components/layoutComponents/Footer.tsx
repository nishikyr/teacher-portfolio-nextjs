import { FaFacebookF, FaInstagram, FaXTwitter, FaLinkedin } from "react-icons/fa6"


export default function Footer() {
    return (
        <footer className="bg-neutral-100 text-gray-700 px-6 py-10 mt-20">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
                {/* Contacto */}
                <div>
                <h3 className="text-lg font-bold mb-2">Contacto</h3>
                <p className="mb-2">¿Tienes alguna consulta? 💌</p>
                <p className="mb-2">Escríbenos, estaremos encantados de leerte:</p>
                <a href="mailto:eloisa.english@gmail.com" className="underline text-blue-600">
                    eloisa.english@gmail.com
                </a>
                </div>

                {/* Enlaces */}
                <div>
                <h3 className="text-lg font-bold mb-2">Enlaces</h3>
                <ul className="space-y-2">
                    <li>
                    <a href="#" className="hover:underline">Aviso legal</a>
                    </li>
                    <li>
                    <a href="#" className="hover:underline">Política de privacidad</a>
                    </li>
                    <li>
                    <a href="#" className="hover:underline">Política de cookies</a>
                    </li>
                </ul>
                </div>

                {/* Newsletter */}
                <div>
                    <h3 className="text-lg font-bold mb-2">La Newsletter de Eloísa 💗</h3>
                    <p className="mb-4 text-sm">
                        Consejos de inglés, inspiración y recursos. ¡Gracias por acompañarme en esta aventura!
                    </p>
                    <form className="flex flex-col gap-2">
                        <input
                        type="text"
                        placeholder="Nombre"
                        className="border-b border-gray-400 bg-transparent px-2 py-1 focus:outline-none"
                        />
                        <input
                        type="email"
                        placeholder="Correo electrónico"
                        className="border-b border-gray-400 bg-transparent px-2 py-1 focus:outline-none"
                        />
                        <button
                        type="submit"
                        className="mt-2 self-start px-4 py-1 border border-gray-700 rounded-full hover:bg-gray-100 transition"
                        >
                        Me apunto
                        </button>
                    </form>
                </div>
            </div>

            {/* Línea inferior */}
            <div className="text-center mt-12 text-sm text-gray-500 border-t border-gray-200 pt-4">
                © {new Date().getFullYear()} Eloisa English. Todos los derechos reservados.
            </div>
            <div className="text-center text-sm text-gray-500">
                Desarrollado por Alejandro Nishiky 
            </div>
            <div className="flex gap-4 justify-center mt-4 text-xl text-gray-600">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                    <FaFacebookF className="hover:text-blue-600 transition" />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                    <FaInstagram className="hover:text-pink-500 transition" />
                </a>
                <a href="https://www.linkedin.com/in/eloisa-mae-caguisa-0009a8148/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin className="hover:text-blue-500 transition" />
                </a>
                <a href="https://link.univ-cotedazur.fr/person/eloisa-mae-caguisa/399791" target="_blank" rel="noopener noreferrer">
                    <img src="/universite_cote.png"
                    className="w-6 h-auto hover:scale-150 transition-transform"
                    alt="Université Côte d Azur" />
                </a>
            </div>
            

        </footer>
    )
}

