import express from 'express'
import mongoose from 'mongoose'

const app = express()

mongoose.set('strictQuery',true)
mongoose.connect(process.env.MONGO_URI).catch(e=>console.error(e))
const db = mongoose.connection
db.once('open',()=>console.info('Database connected...'))

app.get('/',(req,res)=>res.sendStatus(200))

app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send('Something broke!')
})

app.listen(process.env.PORT,()=>console.info(`Server listening at ${process.env.PORT}`))
