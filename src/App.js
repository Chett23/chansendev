import "./App.css";
import { useEffect, useState, useRef } from "react";
import { useEvent } from "./Hooks/useEvent";
import { ThemeProvider } from "styled-components";

import useDetectScroll from "@smakss/react-scroll-direction";

import Header from "./Components/Header";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import About from "./Pages/About";
import Portfolio from "./Pages/Portfolio";
import Experience from "./Pages/Experience";
import UnderConstruction from "./Pages/UnderConstruction";
import NotFound from "./Pages/NotFound";
import {
	MainCont,
	AppCont,
	ThemeSelectorCont,
	SideBarCont,
	ContentSectionCont,
} from "./Components/containers";
import { colors } from "./Components/theme";

import { DarkMode, LightMode } from "./Components/svgs";

const App = () => {
	// State Manangement
	const [theme, setTheme] = useState("dark");
	const [elementsTocheck, setElementsTocheck] = useState([
		"about",
		"experience",
		"portfolio",
	]);
	// const [scrollPosition, setScrollPosition] = useState(0);
	// ref Management
	const contentRefs = useRef([]);
	const aboutRef = useRef(null);
	const portfolioRef = useRef(null);
	const experieceRef = useRef(null);
	contentRefs.current = [];

	// Global Vars
	const construction = false;
	const notFound = false;
	// Event Management
	const scrollDirection = useDetectScroll();
	useEvent("scroll", () => {
		checkActive(aboutRef.current);
		checkActive(portfolioRef.current);
		checkActive(experieceRef.current);
	});

	const checkActive = (ref) => {
		const navElement = document.getElementById(`${ref.id}-nav`);
		const center = window.innerHeight / 2;
		// console.log(
		// 	ref.id,
		// 	ref.getBoundingClientRect().top,
		// 	center,
		// 	ref.getBoundingClientRect().bottom,
		// 	center
		// );
		if (scrollDirection == "down") {
			if (ref.getBoundingClientRect().top <= center) {
				navElement.classList.add("active");
			}
			if (ref.getBoundingClientRect().bottom <= center) {
				navElement.classList.remove("active");
			}
		} else if (scrollDirection == "up") {
			if (ref.getBoundingClientRect().bottom >= center) {
				navElement.classList.add("active");
			} else if (ref.id == "about" && ref.getBoundingClientRect().bottom >= window.innerHeight / 3) {
				navElement.classList.add("active");
			}
			if (ref.getBoundingClientRect().top >= center) {
				navElement.classList.remove("active");
			}
		}
	};

	const handleNavClick = (section) => {
		contentRefs.current
			.find((el) => el.id == section)
			.scrollIntoView({ behavior: "smooth" });
		const navElement = document.getElementById(`${section}-nav`);
		navElement.classList.add("active");
	};

	const handleThemeChange = () => {
		if (theme === "dark") {
			setTheme("light");
		} else {
			setTheme("dark");
		}
	};

	useEffect(() => {
		aboutRef.current = document.getElementById("about");
		portfolioRef.current = document.getElementById("portfolio");
		experieceRef.current = document.getElementById("experience");
	}, [theme]);
	return (
		<ThemeProvider theme={colors[theme]}>
			<MainCont>
				{construction ? (
					<UnderConstruction />
				) : notFound ? (
					<NotFound />
				) : (
					<AppCont>
						<SideBarCont>
							<Header />
							<NavBar handleNavClick={handleNavClick} />
							<Footer />
						</SideBarCont>
						<ContentSectionCont>
							<About />
							<Experience />
							<Portfolio />
						</ContentSectionCont>
					</AppCont>
				)}
				{/* ThemeSelector */}
				<ThemeSelectorCont onClick={() => handleThemeChange()}>
					{theme === "dark" ? <LightMode /> : <DarkMode />}
				</ThemeSelectorCont>
			</MainCont>
		</ThemeProvider>
	);
};

export default App;
