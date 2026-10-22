import mongoose from "mongoose"
import { maxLength } from "zod"

const TaskSchema = new mongoose.Schema({
    task:{
        type: String,
        required: [true, "name must be provided"],
        trim: true,
        maxLength: [20, "task name must not exceed 20 characters"]
  
    },

    complete:{
        type: Boolean,
        default:false
    },
    
})

export const Task = mongoose.model("Task",TaskSchema)