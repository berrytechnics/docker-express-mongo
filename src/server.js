import express from 'express'
import { TestController } from './controllers.js'
const app = express()

app.get('/',(req,res)=>res.sendStatus(200))

app.get('/test',async(req,res,next)=>{
    try{
        const entry = await TestController.create('One')
        const read = await TestController.read(entry._id)
        read.name = 'Two'
        const update = await TestController.update(read)
        await TestController.delete(read._id)
        res.send(JSON.stringify({
            "init":entry,
            "update":read,
            "deleted":true
        }))
    }
    catch(e){
        next(e)
    }
})

app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send('Something broke!')
})

app.listen(process.env.PORT,()=>console.info(`Server listening at ${process.env.PORT}`))
