import { IMaterial } from "@/models/IMaterials"

export const materials: IMaterial[] = [
    {
        titulo: 'English Grammar in Use',
        descripcion: 'El clásico libro de gramática de Cambridge que todo estudiante debería tener.',
        tipo: 'Libro',
        url: 'https://www.cambridge.es/en/catalogue/grammar-vocabulary-and-pronunciation/grammar/english-grammar-in-use5',
        imagen: '/cambridge_book_1.jpg'
    },
    {
        titulo: 'WordReference',
        descripcion: 'Diccionario en línea confiable con foros para dudas reales.',
        tipo: 'Diccionario',
        url: 'https://www.wordreference.com',
        imagen: '/wordreference.png'
    },
    {
        titulo: 'BBC Learning English',
        descripcion: 'Una web con materiales gratis, noticias y ejercicios para todos los niveles.',
        tipo: 'Web',
        url: 'https://www.bbc.co.uk/learningenglish',
        imagen: '/bbc-learning.png'
    },
    {
        titulo: 'The English We Speak',
        descripcion: 'Podcast corto de la BBC con frases reales y expresiones.',
        tipo: 'Podcast',
        url: 'https://www.bbc.co.uk/programmes/p02pc9tn',
        imagen: '/bbc-radio-podcasts.jpg'
    },
    {
        titulo: 'Quizlet',
        descripcion: 'Crea tarjetas de vocabulario y juega con ellas para memorizar mejor.',
        tipo: 'App',
        url: 'https://www.quizlet.com',
        imagen: '/quizlet.png'
    },
    {
        titulo: 'Duolingo',
        descripcion: 'App popular para aprender vocabulario y gramática de forma divertida.',
        tipo: 'App',
        url: 'https://www.duolingo.com',
        imagen: '/duolingo.svg'
    }
]
