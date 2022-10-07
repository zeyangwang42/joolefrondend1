import React from "react";
import "./SignupForm.css"

export default class SignupForm extends React.Component{
    constructor(props) {
        super(props);
        this.state= {
            username: "",
            email: "",
            password: "",
            passwordConfirmation: "",
            history: this.props.history
        }

    }
    onChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })

    }
    onSubmit=(e)=>{
        e.preventDefault();
        //console.log(this.state)
        this.props.signupActions.userSignupRequest(this.state);



    }
    render() {

        return(
            <form onSubmit={this.onSubmit}>
                <h1>Sign Up Page</h1>

                <div className="form-group">
                    <label className="control-label">Username:</label>
                    <input className= "signupInput"
                           type="text"
                           name="username"
                           value={ this.state.username}
                           onChange={this.onChange}
                           className="form-control"
                           placeholder="username"
                    />

                </div>
                <div className="form-group">
                    <label className="control-label">Email:</label>
                    <input className= "signupInput"
                           type="email"
                           name="email"
                           value={ this.state.email}
                           onChange={this.onChange}
                           className="form-control"
                           placeholder="optional"
                    />

                </div>


                <div className="form-group">
                    <label className="control-label">Password:</label>
                    <input className= "signupInput"
                           type="password"
                           name="password"
                           value={ this.state.password}
                           onChange={this.onChange}
                           className="form-control"
                           placeholder="password"
                    />

                </div>

                <div className="form-group">
                    <label className="control-label">Password Confirmation:</label>
                    <input className= "signupInput"
                           type="password"
                           name="passwordConfirmation"
                           value={ this.state.passwordConfirmation}
                           onChange={this.onChange}
                           className="form-control"
                           placeholder="password confirmaion"
                    />
                    {(this.state.passwordConfirmation!=this.state.password)? <span className="form-text-information">   not match the password</span>:<span className="form-text text-muted"></span>}
                </div>
                <div className="from-group">
                        <button id="registerButton" onClick={()=>this.onSubmit}>Regist</button>
                </div>
            </form>
        )

    }
}