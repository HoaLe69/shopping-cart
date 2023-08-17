import SizeBtn from "./ButtonSize";
import { useDispatch , useSelector } from "react-redux";
const Aside = () => {
	const sizes = ["XS", "S", "M", "ML", "L", "XL", "XXL"];
	const chooseSizes = useSelector(state => state.chooseSize.sizes)
	const dispatch = useDispatch()
	const hanleOnClickSize = (e) => {
		const choose = e.target.innerText;
		const isExist = chooseSizes.indexOf(choose)
		if (isExist > -1) {
			dispatch({type : 'REMOVE_SIZE' , payload : choose})
		}
		else dispatch({type : 'ADD_SIZE' , payload : choose})
	}
	return ( 
		<aside className="text-center py-[15px]">
			<h2 className="font-bold mb-[20px]">Sizes:</h2>
			<div className="[&>*:not(:first-child)]:ml-[7px]">
				{sizes.map((size, index) => {
					return <SizeBtn listChoose={chooseSizes} setSize={hanleOnClickSize} key={index}>{size}</SizeBtn>;
				})}
			</div>
			<p className="text-[14px] font-light my-[16px]">
				Leave a star on Github if this repository was useful
			</p>
		</aside>
	);
};
export default Aside;
