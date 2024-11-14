import express from 'express'
import cors from 'cors'
import 'dotenv/config'


//App config
const app = express()
const port = process.env.PORT || 4000
//middleware
app.use(cors())
app.use(express.json())

//api endpoints
app.get('/',(req,res)=> {
    res.send("API WORKING")
})


app.listen(port,()=> console.log("Server startedd on :" +port))