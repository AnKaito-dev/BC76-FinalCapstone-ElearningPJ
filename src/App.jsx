import { useRoutes } from "react-router-dom";
import { pathDefault } from "./common/path";
import "./index.css";
import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import React, { Suspense, CreateContext, createContext } from "react";
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
      </NotificationContext.Provider>
    </>
  );
}

export default App;
