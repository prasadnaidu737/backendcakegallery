const Express = require("express");

const PORT = 5000;
const cors=require("cors")
require("./dbconnection")
const Routes = require("./routes")
const app = Express();

app.use(cors())
app.use(Express.json())

app.use("/users", Routes);

app.listen(PORT, () => {
  console.log("user listening to port on...", PORT);
});
