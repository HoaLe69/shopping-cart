import images from "../images";
import BuyItem from "./BuyItem";
import { twMerge } from "tailwind-merge";
import { useDispatch, useSelector } from "react-redux";
const Modal = () => {
	const isShowModal = useSelector((state) => state.modal);
	const quantity = useSelector((state) => state.quantity);
	const listCart = useSelector(state => state.addToCard)
	const dispatch = useDispatch();
	const classes = twMerge(`
		fixed
		text-white
		bg-black-blur
		top-0
		right-0
		bottom-0
		w-[100%]
		lg:right-0
		lg:w-[40%]
		z-[100]
		translate-x-[100%]
		transition-all
		${isShowModal && "animate-show" }
	`);
	console.log(listCart)
	const hanldeOnClickCloseModal = () => {
		dispatch({ type: "HIDE_MODAL", payload: false });
	};
	return (
		<div className={classes}>
			<div className="relative overflow-y-scroll h-[calc(100%-200px)]">
				<span
					onClick={hanldeOnClickCloseModal}
					className="inline-block p-[15px] px-[20px] cursor-pointer hover:bg-gray-light"
				>
					X
				</span>
				<div>
					<div className="flex items-center justify-center gap-[20px] relative">
						<img src={images.cart} alt="cart shopping" />
						<span className="text-[20px] font-bold">Cart </span>
						<span className="absolute block w-[20px] h-[20px] rounded-full text-center text-[13px] bg-yellow-bold text-[#000] bottom-[-10px] left-[50%] translate-x-[-100%]">{quantity.quantity}</span>
					</div>
					<div className="mt-[40px]">
						{listCart.map(product => {
							return (
								<BuyItem product={product} key={product.name} />
							);
						})}
					</div>
				</div>
			</div>
			<div className="absolute w-[100%] h-[200px] p-[5%] z-[1000] shadow-md bottom-0 left-0 right-0">
				<div className="flex items-center justify-between">
					<p className="text-[16px] text-gray-thin">SUBTOTAL</p>
					<p className="text-[22px] text-yellow-bold">$ { quantity.total.toFixed(2) }</p>
				</div>
				<button onClick={() => alert(`Total bill is $${quantity.total.toFixed(2)}`)} className="mt-[40px] w-full py-[15px] bg-black-bold hover:contrast-125">
					CHECK OUT
				</button>
			</div>
		</div>
	);
};
export default Modal;
