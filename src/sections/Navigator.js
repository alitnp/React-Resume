import React from "react";
import "./Navigator.css";
import data from "./data.json";
import * as Scroll from "react-scroll";
import {
	Link,
	Element,
	Events,
	animateScroll as scroll,
	scrollSpy,
	scroller,
} from "react-scroll";
class Navigator extends React.Component {
	constructor(props) {
		super(props);
		this.state = { info: data };
	}
	scrollToBottom = () => {
		scroll.scrollTo(100);
	};
	render() {
		return (
			<nav
				className="Navigator"
				style={{
					backgroundColor: this.props.bgc,
				}}
			>
				<div className="navTitles">
					<span onClick={this.scrollToBottom}>{data.Navigator.about}</span>
					<span>{data.Navigator.skills}</span>
				</div>
			</nav>
		);
	}
}

export default Navigator;
