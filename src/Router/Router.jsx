import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Gallery from "../Pages/Gallery/Gallery";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Gallery></Gallery>
            }
        ]
    }
])