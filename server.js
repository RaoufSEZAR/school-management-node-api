const express = require("express");
const morgan = require("morgan");
require("dotenv").config();
const app = express();

const port = process.env.PORT || 3000;

app.get("*", (req, res) => {
	res.sendFile(`index.html`, { root: www });
});

// middleware
app.use(morgan("dev"));
// server
app.listen(port, () => console.log(`listening on http://localhost:${port}`));
