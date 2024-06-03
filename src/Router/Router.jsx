import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Home from "../Home/Home";
import Login from "../loginandregister/Login";
import Signup from "../loginandregister/Signup";
import Userdasbord from "../Dasbord/Userdasbord";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/signup',
                element:<Signup></Signup>
            },
            {
                path:'/dasbord',
                element:<Userdasbord></Userdasbord>
            }
        ]

        

    }
])

export default router;