import images from "../images";
import { useDispatch  , useSelector} from "react-redux";
const CartPress = () => {
	const dispatch = useDispatch()
	const handleOnClickCart = () => {
		dispatch({type : 'SHOW_MODAL' , payload : true})	
	}
	const quantity = useSelector(state => state.quantity.quantity)
	return (
		<div onClick={handleOnClickCart} className="fixed p-[15px] bg-black-blur top-0 right-0 z-[100] cursor-pointer hover:brightness-[.8]">
			<img
				src={images.cart}
				alt="cart image"
			/>
			<span className="absolute block w-[20px] text-center text-[13px] h-[20px] right-0 bottom-[5px] rounded-full bg-yellow-bold">{ quantity }</span>
		</div>
	);
};
export default CartPress
