const express = require('express');
const app = express();

app.get("/", (req, res) => {
    res.send("Hello World con express")
});

app.listen(3000);
console.log("Funcionando en puerto 3000");