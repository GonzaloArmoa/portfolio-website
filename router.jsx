import { createBrowserRouter } from "react-router-dom";
import { HomePage } from "./src/pages/HomePage";
import { ProjectsPage } from "./src/pages/ProjectsPage";

import App from "./src/App";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "projects",
        element: <ProjectsPage />,
      },
    ],
  },
]);
