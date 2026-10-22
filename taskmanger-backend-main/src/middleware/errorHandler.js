import { customAPIError } from "../errors/customError.js"



export const errorHandler=(err,req,res,next)=>{
    if(err instanceof customAPIError) {
        return res.status(err.status).json({msg:err.message})
    }
    return res.status(404).json({msg:"something went wrong please try again"})

    
}