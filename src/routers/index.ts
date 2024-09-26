import authRoute from "./auth";

const BASE_URL = process.env.BASE_URL;

export const definedRoutes = (app: any) => {
  app.use(BASE_URL, authRoute);
};
