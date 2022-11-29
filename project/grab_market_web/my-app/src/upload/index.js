import { Form, Divider, Input, InputNumber, TextArea, Button } from "antd";
import "./index.css";

function UploadPage() {
	const onSubmit = (values) => {
		console.log(values);
	};

	return (
		<div id="upload_container">
			<Form name="상품 업로드" onFinish={onSubmit}>
				<Form.Item name="upload" label={<div id="upload_label">상품 사진</div>}>
					<div id="upload_img_placeholder">
						<img src="images/icons/camera.png" />
						<span>이미지를 업로드해주세요.</span>
					</div>
				</Form.Item>
				<Divider />
				<Form.Item
					label={<div className="upload_label">판매자명</div>}
					name="seller"
					rules={[{ required: true, message: "판매자 이름을 써주세요." }]}
				>
					<Input
						className="upload_name"
						size="large"
						placeholder="판매자명을 입력해 주세요."
					></Input>
				</Form.Item>
				<Divider />
				<Form.Item
					name="name"
					label={<div className="upload_label">상품 이름</div>}
					rules={[{ required: true, message: "상품 이름을 입력해 주세요." }]}
				>
					<Input
						className="upload_name"
						size="large"
						placeholder="상품이름을 입력해 주세요."
					></Input>
				</Form.Item>
				<Divider />
				<Form.Item
					label={<div className="upload_label">가격</div>}
					name="price"
					rules={[{ required: true, message: "상품 가격을 입력해 주세요." }]}
				>
					<InputNumber size="large" className="upload_price" defaultValue={0} />
				</Form.Item>
				<Divider />
				<Form.Item
					name="description"
					label={<div className="upload_label">상품 소개</div>}
					rules={[{ required: true, message: "상품 소개를 써 주세요." }]}
				>
					<Input.TextArea
						size="large"
						id="product_description"
						showCount
						maxLength={300}
						placeholder="상품 소개를 적어주세요"
					/>
				</Form.Item>
				<Form.Item>
					<Button id="submit_button" size="large" htmlType="submit">
						등록
					</Button>
				</Form.Item>
			</Form>
		</div>
	);
}
export default UploadPage;
