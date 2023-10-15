import "./App.css";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Portfolio from "./Pages/Portfolio";
import { MainCont } from "./Components/containers";
import UnderConstruction from "./Pages/UnderConstruction";

function App() {
	const construction = true;
	return construction ? (
		<MainCont>
			<UnderConstruction />
		</MainCont>
	) : (
		<MainCont>
			<Home />
			<About />
			<Portfolio />
		</MainCont>
	);
}

export default App;
