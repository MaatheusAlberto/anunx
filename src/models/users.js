import mongoose from 'mongoose'

//campos do BD
const schema = new mongoose.Schema({
    name:{
        type: String,
        required: [true, 'O campo "nome" é obrigatório']
    },
    email:{
        type: String,
        required: [true, 'O campo "email" é obrigatório']
    },
    password:{
        type: String,
        required: [true, 'O campo "senha" é obrigatório']
    },
})

export default mongoose.models.users || mongoose.model('users', schema)