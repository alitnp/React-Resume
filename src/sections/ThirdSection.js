import React, { Component } from "react";
import "./ThirdSection.css";
import {
	Link,
	Element,
	Events,
	animateScroll as scroll,
	scrollSpy,
	scroller,
} from "react-scroll";
import Card from "./shapes/card";

class ThirdSection extends Component {
	constructor() {
		super();
	}
	scrollToTop = () => {
		scroll.scrollToTop();
	};
	render() {
		return (
			<section className="third-section">
				<h1>Skills</h1>
				<div className="card-holder">
					<Card bgc={this.props.bgc} lable="HTML" logo="html5.svg"></Card>
					<Card bgc={this.props.bgc} lable="CSS" logo="css.svg"></Card>
					<Card
						bgc={this.props.bgc}
						lable="JavaScript"
						logo="javascript.svg"
					></Card>
					<Card bgc={this.props.bgc} lable="React" logo="react.svg"></Card>
					<Card bgc={this.props.bgc} lable="Flutter" logo="flutter.svg"></Card>
					<Card bgc={this.props.bgc} lable="SQL" logo="sql.svg"></Card>
					<Card bgc={this.props.bgc} lable="C#" logo="csharp.svg"></Card>
				</div>
				<img
					src={require("./images/up.png")}
					className="arrow"
					onClick={this.scrollToTop}
				/>
			</section>
		);
	}
}
export default ThirdSection;
