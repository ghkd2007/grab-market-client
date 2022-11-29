import "./index.css";
import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";

function MainPageComponent() {
	const [products, setProducts] = React.useState([]);
	React.useEffect(function () {
		axios
			.get(
				"https://5aa38a05-f11b-4e5c-bb04-14e3f145743b.mock.pstmn.io/products"
			)
			.then(function (result) {
				//console.log(result);
				const products = result.data.products;
				console.log(products);
				setProducts(products);
			})
			.catch(function (error) {
				console.error("에러 발생 : ", error);
			});
	}, []);

	return (
		<div>
			<div id="banner">
				<img src="images/banners/banner1.png" alt="" />
			</div>
			<h1>판매되는 상품들</h1>
			<div id="product_list">
				{products.map((product, index) => (
					<div className="product_card">
						<Link className="product_link" to={`/products/${product.id}`}>
							<div>
								<img className="product_img" src={product.imageUrl} />
							</div>
							<div className="product_contents">
								<span className="product_name">{product.name}</span>
								<span className="product_price">{product.price}</span>
								<div className="product_seller">
									<img
										className="product_avatar"
										src="images/icons/avatar.png"
									/>
									<span>{product.seller}</span>
								</div>
							</div>
						</Link>
					</div>
				))}
			</div>
		</div>
	);
}

export default MainPageComponent;
