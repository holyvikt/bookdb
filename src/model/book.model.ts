import { ObjectId } from "mongodb";
import { model, Schema } from "mongoose";


interface Book {
    _id: ObjectId
    name: string
    author: string
    publication: number
    image?: string
}

// Mongoose schema
const schema = new Schema<Book>({
    id: {type: ObjectId, required: false},
    name: {type: String, required: true},
    author: {type: String, required: true},
    publication: {type: Number, required: true},
    image: {type: String, required: false}
})

// Mongoose model
const BookModel = model<Book>('Book', schema)

export {Book, BookModel}