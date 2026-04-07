const express = require("express");
const cors = require("cors");
const situationRoutes = require("./routes/situation.routes");

const app = express();

const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./swagger");

app.use(cors());
app.use(express.json());

app.use("/situation", situationRoutes);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// health check
app.get("/health", (req, res) => {
  res.json({ status: "OK" });
});

module.exports = app;