import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/home/Home";

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                element: <Home />,
                index: true
            }
        ]
    }
])