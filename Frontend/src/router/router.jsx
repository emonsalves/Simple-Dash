import { createHashRouter } from "react-router-dom";
import { Login, Register, Dashboard, Home } from "../pages";
import ProtectedRoute from "../auth/ProtectedRoute.jsx";
import { ForgotPassword } from "../pages/ForgotPassword";
import { Test } from "../pages/Test";

const router = createHashRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/recovery-password",
    element: <ForgotPassword />,
  },
  {
    path: "/reset-password",
    element: <Home />,
  },
  {
    path: "/test",
    element: <Test />,
  },
  {
    path: "/",
    element: <ProtectedRoute />,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/Home",
        element: <Home />,
      },
    ],
  },
]);

export default router;
