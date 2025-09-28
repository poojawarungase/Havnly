require("dotenv").config();
const express = require("express");
const dbconnect = require("./db");
const userrouter = require("./controller/user");
const chatrouter = require("./controller/chatbot");
const listrouter = require("./routes/listroutes");
const addressroute = require("./routes/addressroute");
const addamenities = require("./routes/amenitiesroute");
const bookingroute = require("./routes/bookingroute");
const reviewroute = require("./routes/reviewroutes");
const paymentroute = require("./routes/paymentroute");
const wishroute = require("./routes/wishroute");
const cookieParser = require("cookie-parser");
const cors = require("cors");

// dotenv.config();
const port = 8000;
const app = express();
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}));


app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/user", userrouter);
app.use("/list", listrouter);
app.use("/address", addressroute);
app.use("/amenities", addamenities);
app.use("/booking", bookingroute);
app.use("/review", reviewroute);
app.use("/wishlist", wishroute);
app.use("/chatbot", chatrouter);
app.use("/payment", paymentroute);

dbconnect();
app.listen(port, () => {
    console.log(`server is started on ${port}`);
})