import "./App.css";
import HomePage from "./pages/home";
import { routes } from "./routes";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const router = createBrowserRouter(routes);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
