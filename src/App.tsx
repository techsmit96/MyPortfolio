import React from "react";
import "./App.css";
import MyCarousal from "./components/my-carousal/mycarousal.component";
import MyNavbar from "./components/my-navbar/mynavbar.component";
import TitleMessage from "./components/title-message/title-message.component";
import About from "./pages/about/about.component";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";
import { Parallax } from "react-parallax";
import { Container } from "react-bootstrap";
import Skills from "./pages/skills/skills.component";
import Experience from "./pages/experience/experience.component";

const App = () => {
	return (
		<div className='App' style={{ position: "relative" }}>
			<MyNavbar />
			<MyCarousal />
			<TitleMessage />
			<div>
				<Parallax
					blur={{ min: -1000, max: 1000 }}
					bgImage={require("./assets/img/parallex/background.webp")}
					bgImageAlt=''
					strength={-200}
				>
					<Container className='container-box rounded'>
						<Fade duration={500}>
							<About />
						</Fade>
					</Container>
				</Parallax>
			</div>
			{/* Skills section  */}
			<div>
				<Container className='container-box rounded'>
					<Slide bottom duration={500}>
						<hr />
						<Skills />
					</Slide>
				</Container>
			</div>
			{/* Experience  */}
			<div>
				<Parallax
					blur={{ min: -1000, max: 1000 }}
					bgImage={require("./assets/img/parallex/background.webp")}
					bgImageAlt=''
					strength={-200}
				>
					<Container className='container-box rounded'>
						<Fade duration={500}>
							<hr />
							<Experience />
						</Fade>
					</Container>
				</Parallax>
			</div>
		</div>
	);
};

export default App;
