import AddPage from "../pages/add";
import BasketPage from "../pages/basket";
import HomePage from "../pages/home";
import WishlistPage from "../pages/wishlist";
import DetailPage from "../pages/detail";
import Root from "../pages/Root";
export const routes = [
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/add",
        element: <AddPage />,
      },
      {
        path: "/:id",
        element: <DetailPage />,
      },
      {
        path: "/wishlist",
        element: <WishlistPage />,
      },
      {
        path: "/basket",
        element: <BasketPage />,
      },
    ],
  },
];
