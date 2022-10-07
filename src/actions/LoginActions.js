import axios from 'axios'
import Login from "../components/Login";
import LoginForm from "../components/LoginFrom";
import SearchPage from "../components/search/SearchPage";
import {NavLink, Route} from "react-router-dom"

export const userLoginRequest=(userData)=>{
    const data=JSON.stringify({
        "userName": userData.username,
        "password": userData.password
    });


    const config={
        method:'post',
        url: 'http://ec2-54-89-212-39.compute-1.amazonaws.com:5000/marketplace/UserController/authenticate',
        headers: {
            'Content-Type': 'application/json'
        },
        data : data
    };

    return dispatch =>{
        axios(config).then(function (response){
            console.log(JSON.stringify(response.data));
            const token = response.data;
            localStorage.setItem("token",token);
            localStorage.setItem("logined",true);
            window.open(`/search`)

        }).catch(function (error){
            console.log(error.response.data);
            alert("login failed");
        });

    }



}