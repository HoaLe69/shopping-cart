import { useDispatch , useSelector} from "react-redux";
import { useState , useRef } from "react";
import { twMerge } from "tailwind-merge";
const BuyItem = ({ product }) => {
	const ref = useRef()
	const [quantity , setQuantity] = useState(0)
	const dispatch = useDispatch()
	const hanleOnClickDel = (product) => {
		 dispatch({ type : 'DELETE_PRODUCT', payload : product.name })
		const quantityOfItem = parseInt(ref.current.innerText.split(' : ')[1])	
		dispatch({type : 'DECREASE' , payload : [quantityOfItem , quantityOfItem*product.price]})
	}
	const classes = twMerge(`
			btn
			opacity-[.2]
			${ quantity > 1 && 'opacity-[1]' }
		`)
	const hanleOnClickDecrease = () => {
		if (quantity > 1) {
			setQuantity(pre => pre - 1);
			dispatch({type : 'DECREASE' , payload : [1 , product.price]})
		}
	}
	const handleOnClickInCrease = () => {
		dispatch({type : 'INCREASE' , payload : [1 , product.price]})
		setQuantity(pre => pre + 1)
	}
	return (
		<div className="px-[5%] relative">
			<div className="flex items-center border-t-2 border-t-black-bold py-[5%]">
				<img className=" w-[15%] h-auto" src={product.img || null} />
				<div className="ml-[12px]">
					<p className="mb-[5px] text-[16px]">{product.name}</p>
					<span ref={ref} className="text-[#5b5a5e]">Quantity : {quantity + product.quantity || 0}</span>
				</div>
				<div className="ml-auto">
					<span className="text-yellow-bold block">$ {product.price.toFixed(2)}</span>
					<div className="mt-[10px]">
						<span onClick={() =>  hanleOnClickDecrease(product)} className={classes}>-</span>
						<span onClick={() => handleOnClickInCrease(product)} className="btn ml-[3px]">+</span>
					</div>
				</div>
			</div>
			<span onClick={()=>hanleOnClickDel(product)} className="absolute top-0 right-[5%] font-bold text-[22px] text-black-bold hover:text-white hover:cursor-pointer">x</span>
		</div>
	);
};
export default BuyItem;
