import logo from "./logo.svg";
import "./App.css";
import MainPageComponent from "./main/index.js";
import { Switch, Route } from "react-router-dom";
import UploadPage from "./upload";
import ProductPage from "./products";

function App() {
	return (
		<div>
			<Switch>
				<Route exact={true} path={"/"}>
					<MainPageComponent />
				</Route>
				<Route exact={true} path={"/products/:id"}>
					<ProductPage />
				</Route>
				<Route exact={true} path={"/upload"}>
					<UploadPage />
				</Route>
			</Switch>
		</div>
	);
}

export default App;
