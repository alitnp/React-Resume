import React, { Component } from "react";
import "./FirstSection.css";
import data from "./data.json";
import SideRectangle from "./shapes/siderects";
import { SocialIcon } from "react-social-icons";

class FirstSection extends Component {
	render() {
		return (
			<section className="first-section">
				<h1>{data.FirstSection.title}</h1>
				<h3>
					{data.FirstSection.subtitle}
					<br />
					{data.FirstSection.subtitle2}
				</h3>
				<div>
					{" "}
					<SocialIcon
						network="instagram"
						bgColor={this.props.bgc}
						url="https://www.instagram.com/alitnp/"
						style={{ margin: "0 7px" }}
					/>
					<SocialIcon
						network="facebook"
						bgColor={this.props.bgc}
						url="https://www.facebook.com/ali.tnp"
						style={{ margin: "0 7px" }}
					/>
					<SocialIcon
						network="github"
						bgColor={this.props.bgc}
						url="https://github.com/alitnp"
						style={{ margin: "0 7px" }}
					/>
				</div>
				<SideRectangle
					top="50px"
					left="0"
					borderBottomRightRadius="30px"
					backgroundColor={data.Colors.black}
				/>
				<SideRectangle
					right="0"
					bottom="0"
					borderTopLeftRadius="25px"
					backgroundColor={this.props.bgc}
				/>
			</section>
		);
	}
}
export default FirstSection;
