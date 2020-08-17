import React, { Component } from "react";
import "./SecondSection.css";
import data from "./data.json";
import Square from "./shapes/square.js";

class SecondSection extends Component {
    render() {
        return (
            <section className="second-section">
                <Square bgc={this.props.bgc}></Square>

                <h3>{data.SecondSection.subtitle}</h3>
                <p> {data.SecondSection.paragraph}</p>
            </section>
        );
    }
}
export default SecondSection;
