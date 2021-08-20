import { model, Schema } from "mongoose";

interface Book {
    _id: string // TODO
    name: string
    author: string
    publication: number
    image?: string
}

const schema = new Schema<Book>({
    id: {type: Number, required: false},
    name: {type: String, required: true},
    author: {type: String, required: true},
    publication: {type: Number, required: true},
    image: {type: String, required: false}
})

const BookModel = model<Book>('Book', schema)

export {Book, BookModel}