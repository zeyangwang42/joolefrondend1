import React from'react'
import "./Login.css"
import LoginForm from "./LoginFrom"
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as loginActions from "../actions/LoginActions"
import {mapDispatchToPropsFactory} from "react-redux/es/connect/mapDispatchToProps";
import { useNavigate } from 'react-router-dom';

class Login extends React.Component{

    render() {

        return(
            <div className="login">
               {console.log(this.props.navigation)}
                <div className="signupLink">
                    <a className="signup" href="http://localhost:3000/signup">Sign up</a>
                </div>

                <LoginForm loginActions={this.props.loginActions}/>
            </div>
        )

    }

}

const mapDispatchToProps=(dispatch)=>{
    return{
        loginActions:bindActionCreators(loginActions,dispatch)
    }
}


export default  connect(null,mapDispatchToProps)(Login)