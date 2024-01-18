import Add from "../pages/add";
import Basket from "../pages/basket";
import Detail from "../pages/detail";
import Home from "../pages/home";
import Wishlist from "../pages/wishlist";
import Root from "../pages/root";

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
        path: "/:detail",
        element: <Detail />,
      },
      {
        path: "/basket",
        element: <Basket />,
      },
      {
        path: "/wishlist",
        element: <Wishlist />,
      },
    ],
  },
];
