import express, { response } from "express";

// @types/express
const app = express();

app.get("/teste", (request, response) => {
    return response.send("Ola mundo")
})

app.post("/teste-post", (request, response) => {
    return response.send("Ola de novo, mundo")
})


// http://localhost:3000
app.listen(3000, () => console.log("Server is running"))