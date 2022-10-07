import React from "react";
import Autocomplete from "./Autocomplete";
import {connect} from "react-redux";
export class SearchForm extends React.Component{
    constructor(props) {
        super(props);
        this.state= {
            options:(this.props.option===undefined)?[""]:this.props.option,
            input:"",
        }
        console.log(this.props.option)

    }


    inputOnChange=(e)=>{
        this.setState({
            input:e.target.value
        })
    }

    onSubmit=(e)=>{
        e.preventDefault();
        //console.log(this.state)

        //
    }

    render() {
        return(
            <form onSubmit={this.onSubmit}>

                <div className="form-group">

                    <Autocomplete
                        suggestions={(this.props.option===undefined)?[""]:this.props.option}
                        value={this.state.input}
                        onChange={this.inputOnChange}
                    />
                </div>


            </form>
        )

    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        //signupActions:bindActionCreators(signupActions,dispatch)
    }



    // return bindActionCreators(signupActions,dispatch);

}



export default connect(null,mapDispatchToProps)(SearchForm)