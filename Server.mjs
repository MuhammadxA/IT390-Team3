//Sam did this
import express from "express";

const app = express();
const port = 3000;

//Jillian's additions:
// const http = require("http");
// const server = http.createServer(function(req, res) {
//   res.writeHead(200, {"Content-Type": "text/plain"});
//   res.end("Jillian's server connection test success")
// })

// server.listen(port, function () {
//   console.log(`server running at port ${port}`)
// })
//Jillian did this
app.use(
  express.urlencoded({
    extended: true,
  })
)

//Sam did this
app.get('/', (req, res) => {
  res.send('Server connection test successful!');
  //res.sendFile(__dirname + mainPage.html); //Jillian added
});

//Jillian did this
app.post("/add_item", async (req, res) => {
  const add_item = await req.body.test_name
  console.log(add_item);
  console.log("success?")
  res.send("success?")
})

//Sam did this
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});