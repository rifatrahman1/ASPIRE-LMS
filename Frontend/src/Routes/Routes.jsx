import {createBrowserRouter} from "react-router-dom";
import Main from "../Layout/Main";
import Error from "../Pages/Error";
import Home from "../Pages/Home";
import Login from "../Pages/Authentication/Login";
import Register from "../Pages/Authentication/Register";
import AllBooks from "../Pages/AllBooks";
import AddBooks from "../Pages/AddBooks";


const router = createBrowserRouter([
      {
            path: "/",
            element: <Main></Main>,
            errorElement: <Error></Error>,
            children: [
                  {
                        path: '/',
                        element: <Home></Home>
                  },
                  {
                        path: '/all-books',
                        element: <AllBooks></AllBooks>
                  },
                  {
                        path: 'add-books',
                        element: <AddBooks></AddBooks>
                  },
                  {
                        path: '/login',
                        element: <Login></Login>
                  },
                  {
                        path: '/register',
                        element: <Register></Register>
                  }
            ]
      },
]);


export default router;