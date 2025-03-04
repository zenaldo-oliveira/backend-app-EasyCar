import cors from "cors";
import express from "express";
import controllerRide from "./controllers/controller.rides.js";

const app = express();

//middlewares
app.use(express.json());
app.use(cors());

//Routes
app.get("/rides", controllerRide.List);
app.post("/rides", controllerRide.Insert);
app.delete("/rides/:ride_id", controllerRide.Delete);
app.get("/rides/:ride_id", controllerRide.ListDetail);

app.put("/rides/:ride_id/finish", controllerRide.Finish);
app.get("/rides/drivers/:driver_user_id", controllerRide.ListForDriver);
app.put("/rides/:ride_id/accept", controllerRide.Accept);
app.put("/rides/:ride_id/cancel", controllerRide.Cancel);

app.listen(3001, () => {
  console.log("Server roaning in port 3001🚀 ");
});
