// const http= require("https");

// const server= http.createServer((req,res)=>{
//     if(req.url==="/"){
//         res.writeHead(200, {"Content_Type": "text/plain"});
//         res.end("home_page");
//     }
//     else if(req.url==="/slow-page"){
//         for(let i=0;i<600000000;i++){}
//         res.writeHead(200, {"Content_Type": "text/plain"});
//         res.end("slow-page");

//     }
// });

// server.listen(8000,()=> console.log("the server is running at 8000"))

const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Home page");
  } else if (req.url === "/slow-page") {
    for (let i = 0; i < 6000000000; i++) {} // Simulate CPU work
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Slow Page");
  }
});

server.listen(8000, () => console.log("Server is running on port 8000"));