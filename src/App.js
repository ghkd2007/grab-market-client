import { Button } from "antd";
import logo from "./logo.svg";
import "./App.css";
import MainPageComponent from "./main/index.js";
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Link,
	useNavigate,
} from "react-router-dom";
import UploadPage from "./upload/index.js";
import ProductPage from "./products/index.js";
import { DownloadOutlined } from "@ant-design/icons";

function App() {
	const history = useNavigate();
	return (
		<div>
			<div id="header">
				<div id="header-area">
					<Link to="/">
						<img src="/images/icons/logo.png" alt="" />
					</Link>
					<Button
						size="large"
						onClick={function () {
							history("/upload");
						}}
						icon={<DownloadOutlined />}
					>
						상품 업로드
					</Button>
				</div>
			</div>
			<div id="body">
				<Routes>
					<Route path={"/"} element={<MainPageComponent />} />
					<Route path="/product/:id" element={<ProductPage />} />
					<Route path="/upload" element={<UploadPage />} />
				</Routes>
			</div>
			<div id="footer"></div>
		</div>
	);
}

export default App;
