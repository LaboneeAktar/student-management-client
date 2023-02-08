import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import AddStudent from "../../Pages/AddStudent/AddStudent";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/addStudent",
        element: <AddStudent />,
      },
    ],
  },
]);

export default router;
