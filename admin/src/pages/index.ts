import { lazy } from "react";

/**
 * ? Authentication
 */
export const LogIn = lazy(() => import("./auth/LogIn"));

/**
 * ? Admin pages
 */
export const Dashboard = lazy(() => import("./Dashboard"));

/**
 * ? Error pages
 */
export const NotFound = lazy(() => import("./errors/NotFound"));
