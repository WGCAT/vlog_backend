const express = require("express");
const app = express();
const cors = require("cors");
const session = require("express-session");
const connect = require("./schemas");

connect();

app.use(cors(corsOptions));

app.use(express.json);
app.use(express.urlencoded({extended:true}));

app.use("/member", require("./router/member"));
app.use("/board", require("./router/board"));

app.listen(8080, () => {
    console.log("listen umm..")
});