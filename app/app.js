const express = require("express");
const morgan = require("morgan");
const adminRouter = require("../routes/staff/adminRouter");

const app = express();

//Middlewares
app.use(morgan("dev"));

//Routes
//admin register
app.use("/api/v1/admins", adminRouter);

module.exports = app;
