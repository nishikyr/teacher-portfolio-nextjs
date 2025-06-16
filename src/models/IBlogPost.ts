export default interface IBlogPost {
    id: string
    title: string
    summary?: string
    description: string
    category: string
    imageUrl: string
    date: string
    readTime: string
    link: string
    author?: string
}
