import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar";
// import HomePage from "../pages/HomePage";
import { navbar } from "../utils/navbar";
import { Diva } from "./style";


const Root =()=>{
    return(
        <BrowserRouter>
            <Routes>
                <Route  element = {<Navbar />} >
                {
                    navbar.map((value)=>{
                        return(
                            <Route key = {value.id()} path = {value.path} element = {value.element} />
                        )
                    })
                }
                </Route>
                <Route path = "https://zesty-melba-24e364.netlify.app/" element = {<Navigate to = {"https://zesty-melba-24e364.netlify.app/home"}/>} />
                <Route path = "*" element = {<Diva>404 Not Found</Diva>} />
            </Routes>
        </BrowserRouter>
    )
}
export default Root; 