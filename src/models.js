import mongoose from 'mongoose'

mongoose.set('strictQuery',true)
mongoose.connect(process.env.MONGO_URI).catch(e=>console.error(e))

const db = mongoose.connection
db.once('open',()=>console.info('Database connected...'))

const TestSchema = new mongoose.Schema({
    name:{
        type:String
    }
})
export const TestModel = mongoose.model('TestModel',TestSchema)