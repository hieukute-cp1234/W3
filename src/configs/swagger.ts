import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import { Application } from "express";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "MMO documents API",
      description: "Describe response and params API of MMO.",
      version: "1.0.0",
    },
    servers: [
      {
        url: "http://localhost:8080",
        description: "Local server",
      },
    ],
  },
  apis: ["./src/routers/*.ts"],
};

const swaggerSpec = swaggerJsdoc(options);

export const definedSwaggerDocs = (app: Application) => {
  app.use("/docs-api", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
};
