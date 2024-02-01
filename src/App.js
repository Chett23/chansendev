import "./App.css";
import { useEffect, useState, useRef } from "react";
import { useEvent } from "./Hooks/useEvent";
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";

import useDetectScroll from "@smakss/react-scroll-direction";

import Header from "./Components/Header";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import About from "./Pages/About";
import Portfolio from "./Pages/Portfolio";
import Experience from "./Pages/Experience";
import UnderConstruction from "./Pages/UnderConstruction";
import NotFound from "./Pages/NotFound";

const App = () => {
	// State Manangement
	const [theme, setTheme] = useState(() =>
		window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : ""
	);
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
		if (scrollDirection === "down") {
			if (ref.getBoundingClientRect().top <= center) {
				navElement.classList.add("active");
			}
			if (ref.getBoundingClientRect().bottom <= center) {
				navElement.classList.remove("active");
			}
		} else if (scrollDirection === "up") {
			if (ref.getBoundingClientRect().bottom >= center) {
				navElement.classList.add("active");
			} else if (
				ref.id === "about" &&
				ref.getBoundingClientRect().bottom >= window.innerHeight / 2
			) {
				navElement.classList.add("active");
			}
			if (ref.getBoundingClientRect().top >= center) {
				navElement.classList.remove("active");
			}
		}
	};

	const handleNavClick = (section) => {
		section === "about" &&
			aboutRef.current.scrollIntoView({ behavior: "smooth" });
		section === "experience" &&
			experieceRef.current.scrollIntoView({ behavior: "smooth" });
		section === "portfolio" &&
			portfolioRef.current.scrollIntoView({ behavior: "smooth" });
		const navElement = document.getElementById(`${section}-nav`);
		navElement.classList.add("active");
	};

	useEffect(() => {
		aboutRef.current = document.getElementById("about");
		portfolioRef.current = document.getElementById("portfolio");
		experieceRef.current = document.getElementById("experience");
	}, [theme]);
	return (
		<div className={theme}>
			<div
				className={`bg-background-200 overflow-x-clip font-sans text-font-800 min-h-screen flex justify-center items-center w-full dark:bg-background-100`}
			>
				{construction ? (
					<UnderConstruction />
				) : notFound ? (
					<NotFound />
				) : (
					<div className="flex flex-col xl:flex-row items-start justify-around max-w-[100rem]">
						<div className="flex flex-col px-12 xl:sticky top-12 justify-around items-start xl:h-[calc(90vh-48px)]">
							<Header />
							<NavBar
								classes="hidden xl:inline"
								handleNavClick={handleNavClick}
							/>
							<Footer />
						</div>
						<div className="flex flex-col gap-8 p-14 xl:py-20 xl:px-10 xl:ml-16">
							<About />
							<div className="xl:hidden p-3 w-[calc(100vw-1rem)] sticky top-0 bg-background-100 shadow-sm">
								Experience
							</div>
							<Experience />
							<div className="xl:hidden p-3 w-[calc(100vw-1rem)] sticky top-0 bg-background-100">
								Portfolio
							</div>
							<Portfolio />
						</div>
					</div>
				)}
				{/* ThemeToggle */}
				<div
					className="p-4 group m-4 rounded-lg cursor-pointer fixed bottom-0 right-0 z-10 hover:bg-accent-200"
					onClick={() =>
						setTheme((prevTheme) =>
							prevTheme === "dark" ? "" : "dark"
						)
					}
				>
					{theme === "dark" ? (
						<SunIcon className="text-font-950 h-6 w-6" />
					) : (
						<MoonIcon className="text-font-950 h-6 w-6" />
					)}
				</div>
			</div>
		</div>
	);
};

export default App;
