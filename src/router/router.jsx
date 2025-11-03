import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../Components/Home/Home";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../Pages/Auth/Login";
import Register from "../Pages/Auth/Register";
import Coverage from "../Pages/Coverage";
import SendParcel from "../Pages/SendParcel/SendParcel";
import About from "../Pages/About/About";
import PrivateRoute from "../routes/PrivateRoute";
import DashboardLayout from "../layouts/DashboardLayout";
import MyParcels from "../Pages/Dashboard/MyParcels";
import Payment from "../Pages/Dashboard/Payment/Payment";
import PaymentHistory from "../Pages/Dashboard/Payment/PaymentHistory";
import TrackParcel from "../Pages/Dashboard/TrackParcel";
import BeARider from "../Pages/Dashboard/BeARider";
import PendingRiders from "../Pages/Dashboard/PendingRiders";
import ActiveRiders from "../Pages/Dashboard/ActiveRiders";
import MakeAdmin from "../Pages/Dashboard/MakeAdmin";
import AdminRoute from "../routes/AdminRoute";
import Forbidden from "../Pages/Forbidden";
import AssignRider from "../Pages/Dashboard/AssignRider";
import PendingDeliveries from "../Pages/Dashboard/PendingDeliveries";
import RiderRoute from "../routes/RiderRoute";
import CompleteDeliveries from "../Pages/Dashboard/CompleteDeliveries";
import MyEarnings from "../Pages/Dashboard/MyEarnings";
import DashboardHome from "../Pages/Dashboard/DashboardHome/DashboardHome";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "about",
        Component: About,
      },
      {
        path: "forbidden",
        Component: Forbidden,
      },
      {
        path: "coverage",
        Component: Coverage,
        loader: () => fetch("./serviceCenter.json"),
      },
      {
        path: "beARider",
        element: (
          <PrivateRoute>
            <BeARider />
          </PrivateRoute>
        ),
        loader: () => fetch("./serviceCenter.json"),
      },
      {
        path: "sendParcel",
        element: (
          <PrivateRoute>
            <SendParcel />
          </PrivateRoute>
        ),
        loader: () => fetch("./serviceCenter.json"),
      },
    ],
  },
  {
    path: "/",
    Component: AuthLayout,
    children: [
      {
        path: "login",
        Component: Login,
      },
      {
        path: "register",
        Component: Register,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    children: [
      {
        index: true,
        Component: DashboardHome,
      },
      {
        path: "myParcels",
        Component: MyParcels,
      },
      {
        path: "payment/:parcelId",
        Component: Payment,
      },
      {
        path: "paymentHistory",
        Component: PaymentHistory,
      },
      {
        path: "pendingRiders",
        element: (
          <AdminRoute>
            <PendingRiders />
          </AdminRoute>
        ),
      },
      {
        path: "activeRiders",
        element: (
          <AdminRoute>
            <ActiveRiders />
          </AdminRoute>
        ),
      },
      {
        path: "track",
        Component: TrackParcel,
      },
      {
        path: "make-admin",
        element: (
          <AdminRoute>
            <MakeAdmin></MakeAdmin>
          </AdminRoute>
        ),
      },
      {
        path: "assign-rider",
        element: (
          <AdminRoute>
            <AssignRider />
          </AdminRoute>
        ),
      },
      // Rider Route
      {
        path: "pending-deliveries",
        element: (
          <RiderRoute>
            <PendingDeliveries />
          </RiderRoute>
        ),
      },
      {
        path: "complete-deliveries",
        element: (
          <RiderRoute>
            <CompleteDeliveries />
          </RiderRoute>
        ),
      },
      {
        path: "my-earnings",
        element: (
          <RiderRoute>
            <MyEarnings />
          </RiderRoute>
        ),
      },
    ],
  },
]);