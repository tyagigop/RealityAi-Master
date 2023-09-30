import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import './index.css';
import reportWebVitals from './reportWebVitals';
import Otp from "./pages/otp";
import Phone from "./pages/phone";
import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from "./pages/home";
import Search from "./pages/search";
import Vastu from "./pages/vastu";
import ReraDetails from "./pages/rera-details"; 
import VastuDetail from "./pages/vastu-detail";
import ReraNew from"./pages/rera-new";
import ReraComp from "./pages/details-card/rera-comp";
import Construction from "./pages/details-card/construction";
import UnitSold from "./pages/details-card/unit-sold";
import UnitConfig from "./pages/details-card/unit-config";
import { MyProvider } from "./pages/provider";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Phone />,
    // errorElement: <ErrorPage />,
  },
  {
    path: "/otp",
    element: <Otp />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/search",
    element: <Search />,
  },
  {
    path: "/society/:society_id",
    element: <Vastu />,
  },
  {
    path: "/vastu-detail/:society_id/:flat_id",
    element: <VastuDetail />,
  },
  {
    path: "/rera-details",
    element: <ReraDetails />,
  },
  {
    path: "/rera-new",
    element: <ReraNew />
  }
  ,
  {
    path: "/rera-comp",
    element: <ReraComp />
  },
  {
    path: "/construction",
    element: <Construction />
  },
  {
    path: "/unit-sold",
    element: <UnitSold />
  },
  {
    path: "/unit-config",
    element: <UnitConfig />
  }


]);

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <MyProvider>
    <RouterProvider router={router} />
  </MyProvider>
  // </React.StrictMode>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
