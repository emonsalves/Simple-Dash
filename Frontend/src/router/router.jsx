import { createHashRouter } from "react-router-dom";
import { Login, Register, Dashboard, Home } from "../pages";
import ProtectedRoute from "../auth/ProtectedRoute.jsx";
import { ForgotPassword } from "../pages/ForgotPassword";

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
    path: "/recovery",
    element: <ForgotPassword />,
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
