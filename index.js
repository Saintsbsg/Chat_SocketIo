let express = require("express");
const app = express();
const http = require("http").createServer(app);
let io = require("socket.io")(http);
app.set('view engine', 'ejs');


io.on("connection",(socket) =>{
    socket.on("disconnect", () =>{
        console.log(`${socket.id} Se desconectou`);
    })
    socket.on("msg", (data) =>{
        io.emit("showmsg",data);
        console.log(data)
    });

})

app.get("/", (req,res) =>{
    res.render("index")
});



http.listen(8181, ()=>{
    console.log("rodando!");
})
