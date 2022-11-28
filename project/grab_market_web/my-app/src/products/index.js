import { useParams } from "react-router-dom";

function ProductPage() {
	const { id } = useParams();
	//console.log(params);
	return <h1>상품상세페이지 {id}번 상품</h1>;
}

export default ProductPage;
