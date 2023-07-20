import { createHashRouter } from "react-router-dom";
import { Dashboard, Login, Register } from "../pages";
import { ForgotPassword } from "../pages/ForgotPassword";
import { PublicLayout } from "../layout/PublicLayout";
import { AuthLayout } from "../layout/AuthLayout";
import { NotFound } from "../pages/NotFound";

const router = createHashRouter([
  {
    path: "/auth",
    element: <PublicLayout />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Login />,
      },
      {
        path: "/auth/register",
        element: <Register />,
      },
      {
        path: "/auth/forgot-password",
        element: <ForgotPassword />,
      },
    ],
  },
  {
    path: "/",
    element: <AuthLayout />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
