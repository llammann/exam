import Home from "../pages/home";
import Basket from "../pages/basket";
import Add from "../pages/add";
import Wishlist from "../pages/wishlist";
import Detail from "../pages/detail";
import Root from "./../pages/Root";
export const routes = [
  {
    path: "/",
    element: <Root />,

    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/add",
        element: <Add />,
      },
      {
        path: "/basket",
        element: <Basket />,
      },
      {
        path: "/wishlist",
        element: <Wishlist />,
      },
      {
        path: "/:id",
        element: <Detail />,
      },
    ],
  },
];
