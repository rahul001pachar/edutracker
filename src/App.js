import React from "react"
//import Contact from "./Components/Contact"
import Login from "./Components/Login.js"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Edutrack from "./Components/Edutrack.js";
import Contact from "./Components/Contact.js";
import ErrorPage from "./Components/errorpage.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Edutrack />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/login",
    element: <Login />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/contact",
    element: <Contact />,
    errorElement: <ErrorPage />,
  },
]);


function App() {
  return (
    <RouterProvider router={router} />
  )
}
export default App
