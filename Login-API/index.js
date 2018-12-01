import express from 'express';
import path from 'path';
import cors from 'cors';

const app=express();
app.use(cors());

// app.get('/*', (req,res)=>{
//     res.sendFile(path.join(__dirname,'index.html'))

// })

app.post("/auth",(req,res)=>{
    console.log("received")
    res.status(400);
})


app.listen(8080,()=>console.log("started"));