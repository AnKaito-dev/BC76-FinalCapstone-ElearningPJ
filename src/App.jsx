import { useRoutes } from "react-router-dom";
import { pathDefault } from "./common/path";
import "./index.css";
import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import React, { Suspense, CreateContext, createContext } from "react";
import SignIn from "./pages/SignIn/SignIn";
import Login from "./pages/LogIn/Login";
import HomePage from "./pages/HomePage";
import DanhSachKhoaHoc from "./pages/DanhSachKhoaHoc/DanhSachKhoaHoc";
export const NotificationContext = createContext();

const Homtemplate = React.lazy(() =>
  import("./templates/HomeTemplate/HomeTemplate")
);
const AdminTemplate = React.lazy(() =>
  import("./templates/AdminTemplate/AdminTemplate")
);

const arrRoutes = [
  {
    path: pathDefault.homePage,
    element: (
      <Suspense fallback={<div>home</div>}>
        <Homtemplate />
      </Suspense>
    ),
    children: [
      {
        path: pathDefault.homePage,
        element: <HomePage />,
      },
      {
        path: pathDefault.course,
        element: <DanhSachKhoaHoc />,
      },
    ],
  },
  {
    index: true,
    path: pathDefault.signIn,
    element: <SignIn />,
  },
  {
    index: true,
    path: pathDefault.logIn,
    element: <Login />,
  },

  {
    path: pathDefault.admin,
    element: (
      <Suspense fallback={<div>admin</div>}>
        <AdminTemplate />
      </Suspense>
    ),
  },
];
function App() {
  const routes = useRoutes(arrRoutes);
  const handleNotification = (type, content, timeClose = 3000) => {
    toast[type](content, {
      position: "top-right",
      autoClose: timeClose,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
  };
  return (
    <>
      <NotificationContext.Provider value={handleNotification}>
        {routes}
        <ToastContainer />
      </NotificationContext.Provider>
    </>
  );
}

export default App;
