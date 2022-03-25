
const express = require("express");

const backend= require("./src.back");

const app = express();
backend(app);



const port = process.env.PORT || 8081;

app.listen(port, () => {
    console.log(`Server ready at port ${port}`);
});
