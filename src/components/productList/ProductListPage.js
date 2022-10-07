import React from "react";

import axios from "axios";
import Autocomplete from "../search/Autocomplete";
import "./productListPage.css"



class ProjectListPage extends React.Component{
    constructor(props) {
        super(props);
        this.state= {
            searchType:(this.props.searchType===undefined)?"chooseType":this.props.searchType,
            options:new Set(),
            input:"",
            Logined: localStorage.getItem("logined"),
            products:(this.props.products===undefined)?[]:this.props.products
        }
        const index=0;
    }

    onChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        },()=>{
            console.log(e.target.name)
            console.log(e.target.value)
        })
    }



    render() {
        //console.log(this.props.history)
        return(
            <div className="row">
                <div className = "above">
                    <div className="selectbox" style={{display:'inline-block'}}>
                        <select name="searchType" id="searchType" value={this.state.searchType} onChange={this.onChange} >
                            <option value="chooseType">choose type</option>
                            <option value="ProductUseType">Use Type</option>
                            <option value="MountingLocation">Mount Location</option>
                            <option value="ProductApplication">Application</option>

                        </select>
                    </div>
                    <div className="selectBox">
                        <Autocomplete suggestions={this.state.suggestions}/>
                    </div>

                </div>
                <div className = "behind" >
                    <div className = "left"style={{display:'inline-block'}}>
                        <div className="button">
                            <p>Search</p><button>save</button><button>clear</button>
                        </div>
                        <div className="filter"></div>
                        <div className="modleyear">
                            modle year <input className="moldeyearfrom"></input> <input className="moldeyearto"></input>
                        </div>
                        <ul className= "sliderPart" style={{listStyle:"none"}}>
                            <li>
                            <label>Airflow</label>
                            <input id="Airflow" type="range" min="0" max="2000"  />
                            </li>
                            <li>
                                <label>Max power</label>
                                <input id="Max-power" type="range" min="0" max="2000"  />
                            </li>
                            <li>
                                <label>Sound at max speed</label>
                                <input id="Sound-at-max-speed" type="range" min="0" max="2000"  />
                            </li>
                            <li>
                                <label>Fan sweep diameter</label>
                                <input id="Fan-sweep-diameter" type="range" min="0" max="2000"  />
                            </li>
                            <li>
                                <label>Fan sweep diameter (in)</label>
                                <input id="Fan-sweep-diameter" type="range" min="0" max="2000"  />
                            </li>
                            <li>
                                <label>Fan sweep diameter (in)</label>
                                <input id="Fan-sweep-diameter" type="range" min="0" max="2000"  />
                            </li>
                            <li>
                                <label>Firm</label>
                                <input id="Firm" type="range" min="0" max="2000"  />
                            </li>
                            <li>
                                <label>Global</label>
                                <input id="Global" type="range" min="0" max="2000"  />
                            </li>

                        </ul>
                    </div>
                    <div className = "right" style={{display:'inline-block'}}>

                    </div>
                </div>

            </div>
        )
    }
}

//


export default ProjectListPage