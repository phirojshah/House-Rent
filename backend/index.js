const connectToMongo = require("./db");
connectToMongo();
const express = require("express");
const app = express();
var cors = require('cors') 
const port = 5000;
app.use(express.json());
app.use(cors())
//Available Routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/roomdesc", require("./routes/roomdesc"));
// app.use("/api/products", require("./routes/products"));

app.listen(port, () => {
  console.log(`House-Rent backend running at http://localhost:${port}`);
});
