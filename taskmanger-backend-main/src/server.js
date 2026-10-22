import express from "express"
import task from "./routes/route.js"
import { connectDB } from "./db/connect.js"
import dotenv from "dotenv"
import path from "path"
import { fileURLToPath } from "url"
import cors from "cors"
import { notFound } from "./middleware/notFound.js"
import { errorHandler } from "./middleware/errorHandler.js"

const app = express();

//middleware
app.use(express.json())
app.use(notFound)
app.use(errorHandler)

const port = 5000;
app.use("/api/v1/tasks", task)
app.use(cors ({
    origin: `https://localhost:3000`
}))

//create a route
app.get("/", (req, res) => {
    res.json({
        message: "welcome to Api",
        tasks: {
            name: "Emma",
            id: 1,
            complete: true
        }
    })
})

app.post("/", (req, res) => {
    console.log(req.body)

    res.json({
        message: "user has been created",
        user: req.body
    })
})

app.patch("/", (req, res) => {
    console.log(req.params)

    res.json({
        message: "user has been updated",
        user: req.params
    })
})

app.delete("/", (req, res) => {
    console.log(req.params)

    res.json({
        message: "user has been deleted",
        user: req.params
    })
})



app.get("/api/tasks/:id", (req, res) => {
    console.log(req.params)

    res.json({
        message: "task Id recieved",
        id: req.params.id
    })
})

app.get("/api/search", (req, res) => {
    console.log(req.query)

    res.json({
        search: req.query
    })
})


app.use("/api/v1/tasks", task)

const _filename = fileURLToPath(import.meta.url)
   console.log(_filename)
const _dirname = path.dirname(_filename)
    console.log(_dirname)

dotenv.config({
    path: path.resolve(_dirname,"../.env")
})
console.log(dotenv.config ({
    path:path.resolve(_dirname, "../.env")
})

)



const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
     app.listen(port, () => {
    console.log(`your server is running on port ${port}.. `)})

    } catch (error) {
        console.log(error)

    }

}
start()

