import express from "express";
import { userRoutes } from "../modules/User/User.routes";
import { authRoutes } from "../modules/auth/auth.route";
import { flatRoutes } from "../modules/flat/flat.route";
import { bookingRoutes } from "../modules/booking/booking.route";

const router = express.Router();

const moduleRoutes = [
  {
    path: "/",
    route: userRoutes,
  },
  {
    path: "/",
    route: authRoutes,
  },
  {
    path: "/",
    route: flatRoutes,
  },
  {
    path: "/",
    route: bookingRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
