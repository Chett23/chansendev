import "./App.css";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Portfolio from "./Pages/Portfolio";
import { MainCont } from "./Components/containers";

function App() {
	return (
		<MainCont>
			<Home />
			<About />
			<Portfolio />
		</MainCont>
	);
}

export default App;
