
const express = require("express");
const bodyParser = require("body-parser");
const cool = require("cool-ascii-faces");

const app = express();

app.use(bodyParser.json());

const port = process.env.PORT || 8081;

const BASE_API_URL = "/api/v1";

var contacts = [
    {
        name: "peter",
        phone: 123456
    },
    {
        name: "paul",
        phone: 234567
    }
];

app.get(BASE_API_URL+"/contacts",(req,res)=>{
    res.send(JSON.stringify(contacts,null,2));
});

app.get(BASE_API_URL+"/contacts/:name",(req,res)=>{
    var nombre = req.params.name;
    filteredContacts = contacts.filter((contact)=>{
        return (contact.name == nombre);
    });
    if(filteredContacts == 0){
        res.sendStatus(404, "NO EXISTE");
    }else{
        res.send(JSON.stringify(filteredContacts[0],null,2));
    }
    
});

app.get("/caritas",(req,res)=>{
    console.log("Requested / route");
    res.send("<html><body>"+cool()+"</body></html>");
});

app.get("/api", (req,res)=>{
    res.send({ result : true })
})

app.post(BASE_API_URL+"/contacts",(req,res)=>{
    contacts.push(req.body);
    res.sendStatus(201, "CREATED");
});

app.delete(BASE_API_URL+"/contacts",(req,res)=>{
    contacts = [];
    res.sendStatus(200, "OK");
});

app.delete(BASE_API_URL+"/contacts/:name",(req,res)=>{
    var nombre = req.params.name;
    contacts = contacts.filter((contact=>{
        return(contact.name != nombre);
    }));
    res.sendStatus(200, "DELETED");
});


app.listen(port, () => {
    console.log(`Server ready at port ${port}`);
});
