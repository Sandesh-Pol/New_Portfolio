import { Sidebar } from "./sidebar";
import { Navbar } from "./navbar";
import { About } from "./About";
import { Resume } from "./resume";
import { Portfolio } from "./portfolio";
import { Blog } from "./Blog";
import { Contact } from "./contact";
import { createBrowserRouter, RouterProvider,Outlet } from "react-router-dom";

const Layout = () => (
    <main>
        <Sidebar />
        <div className="main-content">
        <Navbar />
        <Outlet />
        </div>
    </main>
);
export const MainComponent = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
            path: "/",
            element: <About />,
        },
        {
          path: "resume",
          element: <Resume />,
        },
        {
          path: "portfolio",
          element: <Portfolio />,
        },
        {
          path: "blog",
          element: <Blog />,
        },
        {
          path: "contact",
          element: <Contact />,
        },
      ],
    },
  ]);
  return (
    <RouterProvider router={router}/>
  );
};
