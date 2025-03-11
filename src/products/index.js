import { useParams } from "react-router-dom";

function ProductPage() {
	const { id } = useParams();
	console.log(id);
	return <h1>상품 상세 {id} 상품</h1>;
}

export default ProductPage;
