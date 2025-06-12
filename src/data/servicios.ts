import ITeachingServices from "@/models/ITeachingServices";

export const services: ITeachingServices [] = [
    {
        title: 'Online Lessons',
        categoria: 'Speaking',
        description: 'Sesiones 1:1 totalmente personalizadas, desde lo más básico hasta conversación fluida.',
        nivel: 'A1 - C2',
        estudiantes: 900,
        autor: 'John Doe',
        emoji: '📚',
        color: 'bg-blue-100'
        
    },
    {
        title: 'Exam Preparation',
        description: 'Prepárate para el B2, C1, TOEFL o IELTS con estrategia, tips y mucha práctica real.',
        categoria: 'Exams',
        emoji: '📚',
        nivel: 'B1 - C1',
        estudiantes: 600,
        color: 'bg-purple-100'
    },
    {
        title: 'Pronunciation Boost',
        description: 'Mejora tu acento, entonación y ritmo para hablar con más confianza.',
        categoria: 'Pronunciation',
        emoji: '🗣️',
        nivel: 'B1 - C2',
        estudiantes: 500,
        color: 'bg-pink-100'
    },
    {
        title: 'Business English',
        description: 'Inglés para el trabajo: reuniones, presentaciones, correos y vocabulario específico.',
        categoria: 'Business',
        emoji: '💼',
        nivel: 'B1 - C2',
        estudiantes: 400,
        color: 'bg-green-100'
    },
    {
        title: 'Grammar Mastery',
        description: 'Domina las estructuras gramaticales con ejercicios prácticos y explicaciones claras.',
        categoria: 'Grammar',
        emoji: '📖',
        nivel: 'A1 - C2',
        estudiantes: 300,
        color: 'bg-yellow-100'
    },
    {
        title: 'Conversation Club',
        description: 'Clases grupales para practicar conversación en un ambiente relajado y divertido.',
        categoria: 'Speaking',
        emoji: '🗨️',
        nivel: 'A2 - C2',
        estudiantes: 200,
        color: 'bg-orange-100'
    }
]