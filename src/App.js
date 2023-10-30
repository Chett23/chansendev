import "./App.css";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Portfolio from "./Pages/Portfolio";
import { MainCont } from "./Components/containers";
import UnderConstruction from "./Pages/UnderConstruction";
import NotFound from "./Pages/NotFound";
import SideBar from "./Components/SideBar";
import NavBar from "./Components/NavBar";

const App = () => {
	const construction = false;
	const notFound = false;
	return construction ? (
		<MainCont>
			<UnderConstruction />
		</MainCont>
	) : notFound ? (
		<MainCont>
			<NotFound />
		</MainCont>
	) : (
		<MainCont>
			<>
				{/* nav components / staic components */}
				<SideBar />
				<NavBar />
			</>
			<>
				{/* site pages */}
				<Home />
				<About />
				<Portfolio />
			</>
		</MainCont>
	);
};

export default App;
