const express = require("express");
const morgan = require("morgan");

const app = express();
const path = require("path");
const PORT = process.env.PORT || 8000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/img", express.static(path.join(__dirname, "./public/img")));

const db = require("./app/models");
db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then((result) => {
    console.log("Database connected!");
  })
  .catch((err) => {
    console.log("Cannot connect to database!");
    process.exit();
  });
app.use(morgan("dev"));
app.get("/", (req, res) => {
  res.json({
    message: "Welcome to vuestore-server",
  });
});

require("./app/routes/product.route")(app);
require("./app/routes/order.route")(app);
app.listen(PORT, () => {
  console.log(`server open is running on http://localhost:${PORT}`);
});
