import express, { request } from 'express';

const app = express();

const PORT = 3000;

app.get("/salute", (request, response)=>{
    response.send("Hola Mundo!");
})

app.listen(PORT, ()=>{console.log(`Listening at port ${PORT}...`)});