import React, { Component } from "react";
import "./card.css";
import PropTypes from "prop-types";

class Card extends Component {
    render() {
        return (
            <div className="card" style={{ backgroundColor: this.props.bgc }}>
                <div className="hover-card">
                    <img
                        src={require(`../images/${this.props.logo}`)}
                        alt=""
                        className="logo"
                    />
                    <span>{this.props.lable}</span>
                </div>
            </div>
        );
    }
}
Card.propTypes = {
    logo: PropTypes.string.isRequired,
    lable: PropTypes.string.isRequired,
};
export default Card;
