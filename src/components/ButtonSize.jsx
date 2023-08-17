import {  useRef  } from "react";
import { twMerge } from 'tailwind-merge';
const SizeBtn = ({ children , setSize , listChoose}) => {
	const ref = useRef()
	const size = ref.current?.innerText || ''
	const classes =twMerge(`
		border-[1px] 
		hover:border-[#000] 
		border-[transparent]
		text-xs
		rounded-full
		bg-gray-blur
		w-[35px]
		h-[35px]
		${
			listChoose.includes(size) && 'bg-black-blur text-gray-blur'
		}
	`)
	return (
			<button ref={ref} onClick={setSize}  className={classes}>
			{children}
		</button>
	);
};
export default SizeBtn;
