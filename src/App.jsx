import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Container from "react-bootstrap/Container";
import { ToastContainer } from "react-toastify";
import { Provider } from "react-redux";
import { GoogleOAuthProvider } from "@react-oauth/google";

import Navbar from "./components/Navbar";
import CariMobil from "./pages/carimobil";
import Login from "./pages/login";
import Register from "./pages/register";
import Details from "./pages/car/details";
import Edit from "./pages/edit";
import AddCar from "./pages/addCar";
import Home from "./pages/home";

import "bootstrap/dist/css/bootstrap.min.css"; // apply bootstrap for styling
import "react-toastify/dist/ReactToastify.css";
import Profile from "./pages/profile";
import Protected from "./components/Protected";
import NonProtected from "./components/NonProtected";
import store from "./redux/store";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Navbar />
        <Container className="mt-5">
          <Home />
        </Container>
      </>
    ),
  },
  {
    path: "/carimobil",
    element: (
      <Protected>
        <Navbar />
        <Container className="mt-5">
          <CariMobil />
        </Container>
      </Protected>
    ),
  },
  {
    path: "/login",
    element: (
      <NonProtected>
        <Container className="mt-5">
          <Login />
        </Container>
      </NonProtected>
    ),
  },
  {
    path: "/register",
    element: (
      <NonProtected>
        <Container className="mt-5">
          <Register />
        </Container>
      </NonProtected>
    ),
  },
  {
    path: "/profile",
    element: (
      <Protected>
        <Navbar />
        <Container className="mt-5">
          <Profile />
        </Container>
      </Protected>
    ),
  },
  {
    path: "/cardetails",
    element: (
      <Protected>
        <Navbar />
        <Container className="mt-5">
          <Profile />
        </Container>
      </Protected>
    ),
  },
  {
    path: "/carmodels/:id",
    element: (
      <Protected>
        <Navbar />
        <Container className="mt-5">
          <Details />
        </Container>
      </Protected>
    ),
  },
  {
    path: "/car/add",
    element: (
      <Protected roles={["admin"]}>
        <Navbar />
        <AddCar />
      </Protected>
    ),
  },
  {
    path: "/cardetails/edit/:id",
    element: (
      <Protected roles={["admin"]}>
        <Navbar />
        <Container className="mt-5">
          <Edit />
        </Container>
      </Protected>
    ),
  },
]);

function App() {
  return (
    <Provider store={store}>
      <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
        <RouterProvider router={router} />

        <ToastContainer theme="colored" />
      </GoogleOAuthProvider>
    </Provider>
  );
}

export default App;
