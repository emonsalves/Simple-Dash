import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login.jsx";
import SignIn from "../pages/SignIn.jsx";
import Dashboard from "../pages/Dashboard.jsx";
import ProtectedRoute from "./ProtectedRoute.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/Signin",
    element: <SignIn />,
  },
  {
    path: "/",
    element: <ProtectedRoute />,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
    ],
  },
]);

export default router;
