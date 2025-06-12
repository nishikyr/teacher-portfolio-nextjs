export interface IMaterial {
    titulo: string
    descripcion: string
    tipo: 'Libro' | 'Diccionario' | 'Web' | 'Podcast' | 'App'
    url: string
    imagen?: string
}
