import { useDispatch } from "react-redux";
const Card = ({ product }) => {
	let price = product.price;
	const dispatch = useDispatch();
	const handleAddToCart = (product) => {
		dispatch({ type: "ADD_PRODUCT", payload: product });
		dispatch({ type: "SHOW_MODAL", payload: true });
		dispatch({ type: "INCREASE", payload: [1, product.price] });
	};
	return (
		<div className="relative group px-[10px] text-center mb-[30px]">
			<div className="w-[100%] relative h-[270px]">
				<img
					className="w-[100%] h-[100%] object-cover"
					src={product.img}
					alt={product.name}
				/>
				<img
					className="w-[100%] group-hover:z-[1] h-[100%] object-cover absolute inset-0 z-[-1]"
					src={product.imgHover}
					alt={product.name}
				/>
			</div>
			<p className="text-[16px] relative h-[45px] px-[20px] my-[16px]  after:bg-yellow after:w-[20px] after:h-[2px] after:absolute after:bottom-0 after:left-[50%] after:translate-x-[-50%]">
				{product.name}
			</p>
			<p className="flex items-center justify-center">
				<small>$</small>
				<b className="ml-[5px] text-[1.5em]">{Math.floor(price)}</b>
				<span>.{price.toFixed(2).toString().split(".")[1]}</span>
			</p>
			<button
				onClick={() => handleAddToCart(product)}
				className="text-white w-full py-[15px] bg-black group-hover:bg-yellow"
			>
				Add to cart
			</button>
			{product.isFreeship && (
				<div className="absolute text-[0.6em] bg-black-blur text-white p-[5px] top-0 right-[10px] z-[100]">
					Free shipping
				</div>
			)}
		</div>
	);
};
export default Card;
