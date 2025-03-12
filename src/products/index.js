import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

function ProductPage() {
	const { id } = useParams();
	const [product, setProduct] = useState(null);
	useEffect(function () {
		axios
			.get(
				`https://7ef32337-8018-457a-916c-6fb2e1c0ee54.mock.pstmn.io/products/${id}`
			)
			.then(function (result) {
				setProduct(result.data);
			})
			.catch(function (error) {
				console.error(error);
			});
		console.log(id);
	}, []);
	console.log(product);
	return <h1>상품 상세 {id} 상품</h1>;
}

export default ProductPage;
