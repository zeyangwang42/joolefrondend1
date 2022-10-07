import React from "react";
import "./routes.css"
import {BrowserRouter, Routes,Route} from "react-router-dom";

import SignupPage from "./components/signup/SignupPage";
import Login from "./components/Login";
import SearchPage from "./components/search/SearchPage";
import ProductListPage from "./components/productList/ProductListPage";
import CheckLoginToRender from "./components/search/CheckLoginToRender"

export default (
    <div className="container">
        <Routes >
            <Route path="/" element={<Login/>}></Route>
            <Route path="/signup" element={<SignupPage/>}></Route>
            <Route path="/search" element={<CheckLoginToRender />}></Route>
            <Route path="/products" element={<ProductListPage searchType="chooseType"/>}></Route>
        </Routes>

    </div>
)