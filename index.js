const express = require("express");
const app = express();
const route = require("./route");
const cors = require("cors");
app.use(cors({
    origin:"*"
}))

app.use(route);
app.listen(5000, () => {
  console.log("server is running");
})