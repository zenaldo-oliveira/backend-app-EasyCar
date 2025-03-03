import cors from "cors";
import express from "express";
import controllerRide from "./controllers/controller.ride.js";

const app = express();

// Middleware...
app.use(express.json());
app.use(cors());

// Routes...
app.get("/rides", controllerRide.List);
app.post("/rides", controllerRide.Insert);

app.listen(3001, () => {
  console.log("Server is 🚀running on port 3001");
});
