import { createHashRouter } from "react-router-dom";
import { Dashboard, Home, Login, Register } from "../pages";
// import ProtectedRoute from "../auth/ProtectedRoute.jsx";
import { ForgotPassword } from "../pages/ForgotPassword";
// import { Test } from "../pages/Test";
import { PublicLayout } from "../layout/PublicLayout";
import { AuthLayout } from "../layout/AuthLayout";

// const router = createHashRouter([
//   {
//     path: "/",
//     element: <Login />,
//   },
//   {
//     path: "/register",
//     element: <Register />,
//   },
//   {
//     path: "/recovery-password",
//     element: <ForgotPassword />,
//   },
//   {
//     path: "/reset-password",
//     element: <Home />,
//   },
//   {
//     path: "/test",
//     element: <Test />,
//   },
//   {
//     path: "/",
//     element: <ProtectedRoute />,
//     children: [
//       {
//         path: "/dashboard",
//         element: <Dashboard />,
//       },
//       {
//         path: "/Home",
//         element: <Home />,
//       },
//     ],
//   },
// ]);

const router = createHashRouter([
  {
    path: "/auth",
    element: <PublicLayout />,
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
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
    ],
  },
]);

export default router;
