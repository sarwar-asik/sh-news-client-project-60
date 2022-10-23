import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Category from "../pages/category/Category";
import Home from "../pages/Home/Home";
import LogIn from "../pages/login/LogIn";
import News from "../pages/News/News";
import TermsAndCondition from "../pages/others/termAndCondition/TermsAndCondition";
import Profile from "../pages/Profile";
import SignIn from "../pages/register/SignIn";

export const routs = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("http://localhost:5000/news"),
      },
      
      {
        path: "/category/:id",
        element: <Category></Category>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/category/${params.id}`),
      },

      {
        path: "/news/:id",
        element: <News></News>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/news/${params.id}`),
      },
      {
        path:'/profile',
        element:<Profile/>
      },
      {
        path:'/login',
       element:<LogIn/>
      },
      {
        path:'/signin',
        element:<SignIn/>
      },
      {
        path:'/terms',
        element:<TermsAndCondition/>
      }
    ],
  },
]);
