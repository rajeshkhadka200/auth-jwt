import express from "express";
const app = express();
import "dotenv/config";
import { db_connect } from "./config/db.js";
// imports routes
import user_router from "./routers/user_router.js";
db_connect();

app.use("/api", user_router);

app.listen(3001, () => console.log("Server is up and running on port 3001!"));
