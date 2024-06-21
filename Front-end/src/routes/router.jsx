import { createBrowserRouter } from "react-router-dom"
import MainLayout from "../Layout/MainLayout"
import Home from "../Pages/Home/Home"
import About from "../Pages/About/About"
import Services from "../Pages/Services/Services"
import Clients from "../Pages/Clients/Clients"
import Careers from "../Pages/Careers/Careers"
import Contact from "../Pages/Contact/Contact"

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout/>,
        children: [
            {
                path:"/",
                element: <Home/>
            },
            {
                path:"About",
                element: <About/>
            },

            {
                path:"Services",
                element: <Services/>
            },

            {
                path:"Clients",
                element: <Clients/>
            },
             
            {
                path:"Careers",
                element: <Careers/>
            },

            {
                path:"Contact",
                element: <Contact/>
            } 

        ]

         
    }
])