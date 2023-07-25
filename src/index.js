import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { Subscribers } from "./component/subscribers";
import { Subscribe } from "./component/subscribe";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/subscribers",
    element: <Subscribers />,
  },
  {
    path: "/subscribe",
    element: <Subscribe />,
  },
  {
    path: "/unsubscribe",
    element: <Subscribe />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
);

document.addEventListener("DOMContentLoaded", () => {
  const element = document.getElementById("wpnp-admin-app");
  if (typeof element !== undefined && element !== null) {
    ReactDOM.render(
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>,
      document.getElementById("wpnp-admin-app")
    );
  }
});