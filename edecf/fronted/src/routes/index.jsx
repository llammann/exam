import Basket from "../pages/basket";
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
    ],
  },
];
