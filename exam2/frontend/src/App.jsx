import { useState } from "react";
import "./App.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { routes } from "./routes";
const router = createBrowserRouter(routes);
function App() {
  const [count, setCount] = useState(0);

  return <RouterProvider router={router} />;
}

export default App;
