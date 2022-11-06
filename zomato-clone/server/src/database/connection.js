import mongoose from 'mongoose'

// We are making it as export default function
// because we can import this function as what ever
// name we want when importing it in our js filessssssss

export default async() =>{
    return mongoose.connect(process.env.MONGO_URI);
}