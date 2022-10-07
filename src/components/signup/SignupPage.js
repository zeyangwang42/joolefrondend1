import React from "react";
import SignupForm from "./SignupForm";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as signupActions from "../../actions/signupActions"
//import { browserHistory } from 'react-router';

class SignupPage extends React.Component{
    render() {
        console.log(this.props.history)
        return(
            <div className="row">
               <div className="col-md-3"></div>
                <div className="col-md-6">
                    <SignupForm history={this.props.history} signupActions={this.props.signupActions}/>
                </div>
                <div className="col-md-3"></div>
            </div>
        )
    }
}
const mapDispatchToProps=(dispatch)=>{
   return{
       signupActions:bindActionCreators(signupActions,dispatch)
   }



   // return bindActionCreators(signupActions,dispatch);

}



export default connect(null,mapDispatchToProps)(SignupPage)