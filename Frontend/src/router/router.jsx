import { createHashRouter } from "react-router-dom";
import { Dashboard, Home, Login, Register } from "../pages";
import { ForgotPassword } from "../pages/ForgotPassword";
import { PublicLayout } from "../layout/PublicLayout";
import { AuthLayout } from "../layout/AuthLayout";
import { NotFound } from "../pages/NotFound";
import { RequireAuth } from "../auth/ProtectedRoute";

const router = createHashRouter([
  {
    path: "/",
    element: <PublicLayout />,
    errorElement: <NotFound />,
    children: [
      {
        path: "",
        element: <Home />,
      },
    ],
  },
  {
    path: "/auth/",
    element: <PublicLayout />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        path: "",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "forgot-password",
        element: <ForgotPassword />,
      },
    ],
  },
  {
    path: "/in/",
    element: <AuthLayout />,
    errorElement: <NotFound />,
    children: [
      {
        path: "dashboard",
        element: <RequireAuth><Dashboard /></RequireAuth>,
      },
    ],
  },
]);

export default router;
