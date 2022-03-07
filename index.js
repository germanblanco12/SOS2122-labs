const cool = require("cool-ascii-faces");
const express = require("express");

const app = express();
const port = process.env.PORT || 8081;

app.use("/", express.static('public'));

app.get("/cool",(req,res)=>{
    console.log("Requested / route");
    res.send("<html><body>"+cool()+"</body></html>");
});


app.listen(port, () => {
    console.log(`Servidor listo ${port}`)
});