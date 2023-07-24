import { createHashRouter } from "react-router-dom";
import { Dashboard, Home, Login, Register } from "../pages";
import { ForgotPassword } from "../pages/ForgotPassword";
import { PublicLayout } from "../layout/PublicLayout";
import { AuthLayout } from "../layout/AuthLayout";
import { NotFound } from "../pages/NotFound";
import { RequireAuth } from "../auth/ProtectedRoute";
import { ResetPassword } from "../pages/ResetPassword";
import { Profile } from "../pages/Profile";

const router = createHashRouter([
  {
    path: "/",
    element: <PublicLayout />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
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
      {
        path: "reset-password",
        element: <ResetPassword />,
      },
    ],
  },
  {
    path: "/in/",
    element: (
      <RequireAuth>
        <AuthLayout />
      </RequireAuth>
    ),
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        path: "dashboard",
        element: <Dashboard />,
      },
       {
        path: "profile",
        element: <Profile />,
      },
    ],
  },
]);

export default router;
