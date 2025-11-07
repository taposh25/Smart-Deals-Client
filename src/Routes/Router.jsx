import { createBrowserRouter } from "react-router";
import RootLayout from "../Layout/RootLayout";
import Home from "../components/Home/Home";
import AllProducts from "../components/AllProducts/AllProducts";
import Register from "../components/Register/Register";
import MyProducts from "../components/MyProducts/MyProducts";
import MyBids from "../components/MyBids/MyBids";




const router  = createBrowserRouter([

    {
        path:"/", Component: RootLayout,
        children: [

            {index: true, Component: Home},
            {path: '/allProducts', Component: AllProducts},
            {path: '/register', Component: Register},
            {
                path: '/myProducts', 
                element: <MyProducts></MyProducts> ,
            },
            {
                path: "/myBids",
                element: <MyBids></MyBids>
            }

        ] 

    }
   
]);

export default router