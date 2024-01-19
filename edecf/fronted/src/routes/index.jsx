import Add from "../pages/add";
import Basket from "../pages/basket";
import Detail from "../pages/detail";
import Home from "../pages/home";
import Root from "../pages/root";
import Wishlist from "../pages/wishlist";

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
        path: "/basket",
        element: <Basket />,
      },
      {
        path: "/wishlist",
        element: <Wishlist />,
      },
      {
        path: "/add",
        element: <Add />,
      },
      {
        path: "/:id",
        element: <Detail />,
      },
    ],
  },
];
