import useUniqueId from "../hooks/useUniqueId";
import HomePage from "../pages/HomePage";
import PropertiesPage from "../pages/PropertiesPage";   


export const navbar = [
    {id: useUniqueId, title: "Home", path: "/home", private : false, hiddin: false , element: <HomePage/>}, 
    {id: useUniqueId, title: "Properties", path: "/properties", private : false, hiddin: false , element: <PropertiesPage/>}, 
    {id: useUniqueId, title: "Properties", path: "*", private : false, hiddin: false , element: <PropertiesPage/>}, 
]