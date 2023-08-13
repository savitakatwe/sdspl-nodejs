import express from "express";
import controller from "./controller";
import bodyParser from "body-parser";

const app = express();
const port = 3002;
app.use(bodyParser.json());

app.get("/customer/getCustomersWithSearch", (req, res) =>
  controller.getCustomersWithSearch(req, res),
);
app.post("/customer/addCustomersWithValidation", (req, res) =>
  controller.addCustomersWithValidation(req, res),
);
app.get("/customer/getNumberOfCustomersForUniqueCities", (req, res) =>
  controller.getNumberOfCustomersForUniqueCities(req, res),
);
app.get("/customer/:id", (req, res) => controller.getCustomerById(req, res));

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
