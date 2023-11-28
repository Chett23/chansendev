import "./App.css";
import { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";

import Header from "./Components/Header";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import About from "./Pages/About";
import Portfolio from "./Pages/Portfolio";
import UnderConstruction from "./Pages/UnderConstruction";
import NotFound from "./Pages/NotFound";
import {
	MainCont,
	ThemeSelectorCont,
	SideBarCont,
	ContentCont,
} from "./Components/containers";
import { colors } from "./Components/theme";

import { DarkMode, LightMode } from "./Components/svgs";

const App = () => {
	const [theme, setTheme] = useState("dark");
	const construction = false;
	const notFound = false;

	const handleThemeChange = () => {
		if (theme === "dark") {
			setTheme("light");
		} else {
			setTheme("dark");
		}
	};
	useEffect(() => {}, [theme]);
	return (
		<ThemeProvider theme={colors[theme]}>
			<MainCont>
				{construction ? (
					<UnderConstruction />
				) : notFound ? (
					<NotFound />
				) : (
					<>
						<SideBarCont>
							<Header />
							<NavBar />
							<Footer />
						</SideBarCont>
						<ContentCont>
							<About />
							<Portfolio />
						</ContentCont>
					</>
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
