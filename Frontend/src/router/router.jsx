import { createHashRouter } from "react-router-dom";
import { Login, Register, Dashboard, Home } from "../pages";

import ProtectedRoute from "../auth/ProtectedRoute.jsx";

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
