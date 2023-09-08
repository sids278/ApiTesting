const express=require('express')
const app=express()
const port=3000

app.get('/get',(req,res)=>res.json([
    {
        name:'sid'
    }
]))

app.listen(port,()=>{
    console.log('im seeing this shit')
})
module.exports = app