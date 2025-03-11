import logo from "./logo.svg";
import "./App.css";
import MainPageComponent from "./main/index.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UploadPage from "./upload/index.js";
import ProductPage from "./products/index.js";

function App() {
	return (
		<div>
			<Routes>
				<Route path={"/"} element={<MainPageComponent />} />
				<Route path="/product/:id" element={<ProductPage />} />
				<Route path="/upload" element={<UploadPage />} />
			</Routes>
		</div>
	);
}

export default App;
