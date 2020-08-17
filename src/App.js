import React, { Component } from "react";
import "./App.css";
import data from "./sections/data.json";
import FirstSection from "./sections/FirstSection.js";
import SecondSection from "./sections/SecondSection.js";
import ThirdSection from "./sections/ThirdSection.js";
import themeIcon from "./sections/images/theme.png";
import { Link, Element } from "react-scroll";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			colorIndex: 0,
			color: "#ffdb35",
		};
	}
	themeChanger = () => {
		let x = this.state.colorIndex;
		const Colors = ["#ffdb35", "#173f5f", "#3CAEA3", "#ed553b"];
		x == Colors.length - 1 ? (x = 0) : x++;
		this.setState({
			color: Colors[x],
			colorIndex: x,
		});
	};
	render() {
		return (
			<div className="App">
				<nav
					className="Navigator"
					style={{
						backgroundColor: this.state.color,
					}}
				>
					<div className="navTitles">
						<Link
							activeClass="active"
							to="about"
							spy={true}
							smooth={true}
							offset={0}
							duration={500}
							onSetActive={this.handleSetActive}
						>
							<span>{data.Navigator.about}</span>
						</Link>
						<Link
							activeClass="active"
							to="skills"
							spy={true}
							smooth={true}
							offset={0}
							duration={500}
							onSetActive={this.handleSetActive}
						>
							<span>{data.Navigator.skills}</span>
						</Link>
					</div>
					<img
						src={themeIcon}
						className="themeIcon"
						onClick={this.themeChanger}
					/>
				</nav>

				<FirstSection bgc={this.state.color} />
				<Element name="about" className="element"></Element>
				<SecondSection bgc={this.state.color} />
				<Element name="skills" className="element"></Element>

				<ThirdSection bgc={this.state.color} />
			</div>
		);
	}
}

export default App;
