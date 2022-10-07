import React from "react";
import {withRouter} from"../withRouter"
import "./Login.css"


class LoginForm extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            username:"",
            password:""

        }
       //withRouter();

    }
    onChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })

    }
    onSubmit=(e)=>{
        e.preventDefault();
        this.props.loginActions.userLoginRequest(this.state)

    }
    render() {
        return(
            <form onSubmit={this.onSubmit}>
                <h1 className="LoginH1">JOOLE</h1>

                <div className="form-group">
                    <label className="control-label">Username:</label>
                    <input type="text"
                           name="username"
                           value={ this.state.username}
                           onChange={this.onChange}
                           className="form-control"
                    />
                </div>

                <div className="form-group">
                    <label className="control-label">Password:</label>
                    <input type="password"
                           name="password"
                           value={ this.state.password}
                           onChange={this.onChange}
                           className="form-control"
                    />
                </div>

                    <div className="from-group">
                            <button className="registerButton" onClick={()=>this.onSubmit}>log in</button>
                    </div>

            </form>
        )

    }
}
export default LoginForm;