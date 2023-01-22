import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import { navbar } from "../utils/navbar";


const Root =()=>{
    return(
        <BrowserRouter>
            <Routes>
                {
                    navbar.map((value)=>{
                        return(
                            <Route key = {value.id} path = {value.path} element = {value.element} />
                        )
                    })
                }
                <Route path = "/home" element = {<h1>Home</h1>} />
                <Route path = "/properties" element = {<h1>Properties</h1>} />
                <Route path = "/" element = {<HomePage/>} />
                <Route path = "*" element = {<h1>404 Not Found</h1>} />
            </Routes>
        </BrowserRouter>
    )
}
export default Root; 