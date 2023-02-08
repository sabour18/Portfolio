const express = require("express");
const path = require('path');

const app = express();

app.use(express.static("public"));

app.get("/", function(req, res){
    res.sendFile(path.join(__dirname, "/index.html"));
});



let port = process.env.PORT;
if(port == null || port == ""){
    port = 3000;
}
//comment 

app.listen(port, () => {
    console.log("Server started on successfully")
})