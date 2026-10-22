import { Task } from "../models/task.js"
import { asyncWrapper } from "../middleware/async.js"
import { createCustomError } from "../errors/customError.js"



export const getAllTask = asyncWrapper(async(req, res) => {
         const task = await Task.find({})
         res.status(200).json({ task })

})


export const createTask = asyncWrapper(async(req, res) => {
        const task= await Task.create(req.body)
        res.status(201).json({ task })
    
})


export const getTask = asyncWrapper(async(req, res) => {
        const { id: taskID } = req.params
        const task = await Task.findOne({_id: taskID})
        res.status(201).json({ task })
        if(!task) {
            return customErrorMsg(`No task with ID ${taskID}`,404)
        }
    
})
export const updateTask = asyncWrapper(async(req, res) => {
           const { id:taskID } = req.params
           const task = await Task.findOneAndUpdate({_id: taskID}, req.body,
             { returnDocument: "after" ,
               runValidators:true
             })
        res.status(200).json({ task })
        if(!task) {
            return customErrorMsg(`No task with ID ${taskID}`,404)
        }


})

export const updateAllTask = asyncWrapper(async(req, res) => {
    
        const task = await Task.find({})
        res.status(200).json ({msg:error})
    
})


export const deleteTask = asyncWrapper(async(req, res) => {
    
        const task=await Task.findOneAndDelete({_id:req.params.id})
        res.status(200).json({task})
    
})    