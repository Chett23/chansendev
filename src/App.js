import "./App.css";
import { useEffect, useState, useRef } from "react";
import { useEvent } from "./Hooks/useEvent";
import { ThemeProvider } from "styled-components";

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
	Row,
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
	const [scrollPosition, setScrollPosition] = useState(0);
	// ref Management
	const contentRefs = useRef([]);
	const addRef = (el) => {
		if (el && !contentRefs.current.includes(el)) {
			contentRefs.current.push(el);
		}
	};
	elementsTocheck.forEach((id) => {
		const el = document.getElementById(id);
		addRef(el);
	});
	// Global Vars
	const construction = false;
	const notFound = false;
	// Event Management
	useEvent("scroll", () => {
		contentRefs.current.forEach((ref) => checkActive(ref));
	});

	const checkActive = (ref) => {
		const navElement = document.getElementById(`${ref.id}-nav`);
		if (scrollPosition >= ref.getBoundingClientRect().top) {
			navElement.classList.add("active");
		}
		if (
			scrollPosition >= ref.getBoundingClientRect().bottom ||
			scrollPosition <= ref.getBoundingClientRect().top
		) {
			navElement.classList.remove("active");
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

	useEffect(() => {}, [theme, scrollPosition]);
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
