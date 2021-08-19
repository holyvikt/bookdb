import { model, Schema } from "mongoose";

interface Book {
    id: number
    name: string
    author: string // TODO class author
    publication: number
    image?: string
}

const schema = new Schema<Book>({
    id: {type: Number, required: true},
    name: {type: String, required: true},
    author: {type: String, required: true},
    publication: {type: Number, required: true},
    image: {type: String, required: false}
})

const BookModel = model<Book>('Book', schema)

export {Book, BookModel}