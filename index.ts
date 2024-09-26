import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import { connectMongooDB } from "./configs/database";
import { definedSwaggerDocs } from "./configs/swagger";
import { definedRoutes } from "./routers";
import { corsOptions } from "./configs/server";

const app = express();

// Config swagger documents API
definedSwaggerDocs(app);
connectMongooDB();

app.use(cors(corsOptions));
app.use(express.json());

definedRoutes(app);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
