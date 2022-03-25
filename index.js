
const express = require("express");
const bodyParser = require("body-parser");
const backend= require("./src.back");

const app = express();
backend(app);

app.use(bodyParser.json());

const port = process.env.PORT || 8081;

app.listen(port, () => {
    console.log(`Server ready at port ${port}`);
});
