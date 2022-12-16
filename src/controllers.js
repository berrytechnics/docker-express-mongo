import {TestModel} from './models.js'

export const TestController = {
    create:async(name)=>{
        const entry = new TestModel({name:name})
        return entry.save({new:true})
    },
    read:async(id=false)=>{
        if(!id) return await TestModel.find({})
        else return await TestModel.findById(id)
    },
    update:async(entry)=>{
        return await TestModel.findByIdAndUpdate(entry._id,entry,{new:true})
    },
    delete:async(id)=>{
        await TestModel.findByIdAndRemove(id)
        return false
    }
}