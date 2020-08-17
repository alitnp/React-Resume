import React, { Component } from "react";
import "./square.css";
import data from "../data.json";

class Square extends Component {
    render() {
        return (
            <div className="square" style={{ backgroundColor: this.props.bgc }}>
                <div className="black-square">
                    {" "}
                    <h1>About Me</h1>
                </div>
            </div>
        );
    }
}
export default Square;
