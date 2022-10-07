import React from "react";
import {SearchForm} from "./SearchForm";
import "./SearchFrom.css"

import axios from "axios";



class SearchPage extends React.Component{
    constructor(props) {
        super(props);
        this.state= {
            searchType:(this.props.searchType===undefined)?"chooseType":this.props.searchType,
            options:new Set(),
            input:"",
            Logined: localStorage.getItem("logined")
        }
        const config={
            method:'get',
            url: 'http://ec2-54-89-212-39.compute-1.amazonaws.com:5000/marketplace/ProductController/findAllProduct',
            headers: {
                'Authorization': "Bearer"+localStorage.getItem("token")
            }
        };
        axios(config).then((response)=>{
            this.setState( {
                response:response.data
            })
        }).catch(function (error){
                console.log(error)
            }
        )



    }

    onChange=(e)=>{
        const curSearchType = e.target.value;

        this.setState({
            searchType:e.target.value

        })
        const curoptions=new Set();
        this.state.response.forEach((element)=>{
            if(curSearchType==="ProductUseType"){
                curoptions.add(element.useType)
                    }
            if(curSearchType==="MountingLocation"){
                curoptions.add(String(element.mountingLocation))
            }
            if(curSearchType==="ProductApplication"){
                curoptions.add(String(element.application))
            }
        })
        //console.log(curoptions)
        this.setState({options:new Set(curoptions)},()=>{
            //console.log(Array.from(this.state.options));
        })
        //this.forceUpdate()
    }



    render() {
        //console.log(this.props.history)
        return(
            <div className="row">

                <div className="ProjectAndUser">
                    <a id="projectLink" href="/">Project image</a>
                </div>

                <div className="titalAndSearch">
                    <h1 className="searchPageH1">Joolon</h1>
                    <h3>Building Product Selection Platform</h3>
                    <div className="seacrchTypeDiv" style={{display:'inline-block'}}>
                        <select name="searchType" id="searchType" value={this.state.searchType} onChange={this.onChange} >
                            <option value="chooseType">choose type</option>
                            <option value="ProductUseType">Use Type</option>
                            <option value="MountingLocation">Mount Location</option>
                            <option value="ProductApplication">Application</option>

                        </select>
                    </div>
                    <div className="seacrchTypeDiv" style={{display:'inline-block'}}>

                        <SearchForm option={Array.from(this.state.options)}/>
                    </div>
                </div>


            </div>
        )
    }
}

//


export default SearchPage