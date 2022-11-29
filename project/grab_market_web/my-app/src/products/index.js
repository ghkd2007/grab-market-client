import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import "./index.css";

function ProductPage() {
	const { id } = useParams();
	const [product, setProduct] = useState(null);
	useEffect(function () {
		axios
			.get(
				`https://5aa38a05-f11b-4e5c-bb04-14e3f145743b.mock.pstmn.io/products/${id}`
			)
			.then(function (result) {
				setProduct(result.data);
			})
			.catch(function (error) {
				console.error(error);
			});
	}, []);

	if (product === null) {
		return <h1>상품 정보를 받아오는 중입니다...</h1>;
	}
	console.log(product);

	return (
		<div>
			<div id="image_box">
				<img src={"/" + product.imageUrl} />
			</div>
			<div id="profile_box">
				<img src="/images/icons/avatar.png" />
				<span>{product.seller}</span>
			</div>
			<div id="contents-box">
				<div id="name">{product.name}</div>
				<div id="price">{product.price}원</div>
				<div id="createdAt">2022년 12월 8일</div>
				<div id="description">{product.description}</div>
			</div>
		</div>
	);
}

export default ProductPage;
