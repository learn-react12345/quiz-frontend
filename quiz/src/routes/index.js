import PrivateRoutes from "../components/PrivateRoutes";
import LayoutDefault from "../layout/LayoutDefault";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Answers from "../Pages/Answers";
import Quiz from "../Pages/Quiz";
import Result from "../Pages/Result";
import Topic from "../Pages/Topic";
import Logout from "../Pages/Logout";



export const routes = [
    {
        path : "/",
        element : <LayoutDefault/>,
        children : [
            {
                path : "/",
                element : <Home />,
            },
            {
                path : "login",
                element : <Login />,
            },
            {
                path : "register",
                element : <Register />,
            },
            {
                path : "logout",
                element : <Logout />,
            },
            {
                element : <PrivateRoutes />,
                children : [
                    {
                        path : "answers",
                        element : <Answers />,
                    },
                    {
                        path : "quiz/:id",
                        element : <Quiz />,
                    },
                    {
                        path : "result/:id",
                        element : <Result />,
                    },
                    {
                        path : "topic",
                        element : <Topic />,
                    }
                ]
            }
        ]
    }
];