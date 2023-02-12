const express = require("express");
const path = require('path');
const _ = require("lodash");

const app = express();

// Set views of pages to views
app.set('view engine', 'ejs');

app.use(express.static(__dirname + "/public"));



let pizza = {
    name: "Pizza Place",
    description: "A customize your pizza site",
    access: "pizza"
};

let todo = {
    name: "To Do Lists",
    description: "Make and cusomize to do lists",
    access: "todo"
};

let secrets = {
    name: "Secrets",
    description: "Post anonymous secrets",
    access: "secrets"
};


app.get("/projects/:customProjectName", function(req, res){

    const customProjectName = _.capitalize(req.params.customProjectName);

    let current = "";
    if(customProjectName === "Pizzaplace"){current = pizza;
    }else if(customProjectName === "Todolist"){current = todo;
    }else if(customProjectName === "Secrets"){current = secrets;
    }
    res.render("project", {project: current})
});





app.get("/", function(req, res){
    res.sendFile(path.join(__dirname, "/index.html"));
});








let port = process.env.PORT;
if(port == null || port == ""){
    port = 3000;
} 

app.listen(port, () => {
    console.log("Server started on successfully")
})