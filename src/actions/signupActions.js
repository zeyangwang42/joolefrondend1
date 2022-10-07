import axios from 'axios'
import Login from "../components/Login";
import SignupForm from "../components/signup/SignupForm";

export const userSignupRequest=(userData)=>{
    const data=JSON.stringify({
        "userName": userData.username,
        "email": userData.email,
        "password": userData.password
    });


    const config={
        method:'post',
        url: 'http://ec2-54-89-212-39.compute-1.amazonaws.com:5000/marketplace/UserController/create',
        headers: {
            'Content-Type': 'application/json'
        },
        data : data
    };
   return dispatch =>{
        axios(config).then(function (response){
            console.log(JSON.stringify(response.data));
            window.open(`/`)
        }).catch(function (error){
            console.log(error.response.data);
            alert(error.response.data);
        });

    }



}