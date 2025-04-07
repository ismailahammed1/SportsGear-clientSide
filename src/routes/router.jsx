// src/routes/Router.jsx
import { createBrowserRouter } from "react-router-dom"; 
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home"; 
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import AddProductPage from "../pages/AddProductPage/AddProductPage";
import AllEquipmentPage from "../pages/AllEquipmentPage/AllEquipmentPage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import ViewDetails from "../pages/ViewDetails/ViewDetails";
import MyEquipmentList from "../pages/MyEquipmentList/MyEquipmentList";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <NotFoundPage/>,
    children: [
      {
        path: "", 
        element: <Home />
      },
      {
        path: "login", 
        element: <Login />
      },
      {
        path: "register", 
        element: <Register />
      },
      {
        path: "add-equipment", 
        element:<PrivateRoute><AddProductPage /></PrivateRoute> 
      },
      {
        path: "all-equipment", 
        element: <AllEquipmentPage />,
      },
      {
        path: "equipment/:id", 
        
        element: <PrivateRoute><ViewDetails /></PrivateRoute>
      },
      {
        path: "my-equipment-list",
        element: <PrivateRoute><MyEquipmentList /></PrivateRoute>
      },
    ]
  }
]);

export default router;