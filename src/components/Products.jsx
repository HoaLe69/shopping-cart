import Card from "./Card";
import ReactLoading from "react-loading";
import { useSelector } from "react-redux";
import { default as products } from "../store";
import { useEffect, useState } from "react";
const Products = () => {
	const [productFilter, setProductFilter] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const chooseSizes = useSelector((state) => state.chooseSize.sizes);
	useEffect(() => {
		if (chooseSizes.length != 0) {
			const loadingTimer = new Promise((resolve) => {
				const dataProduct = products.filter((product) => {
					return chooseSizes.find((chooseSize) =>
						product.size.includes(chooseSize)
					);
				});
				setTimeout(() => resolve(dataProduct), 200);
				setIsLoading(true);
			});
			loadingTimer.then((data) => {
				setProductFilter(data);
				setIsLoading(false);
			});
		} else {
			const loadingTimer = new Promise(resolve => {
				setTimeout(() => { resolve(products)  }, 200)
				setIsLoading(true)
			})
			loadingTimer.then((data) => { 
				setProductFilter(data);
				setIsLoading(false)
			})
		}
	}, [chooseSizes]);
	return (
		<>
			{isLoading ? (
				<div className="w-full grow flex items-center justify-center">
					<ReactLoading
						type="spin"
						color="#000"
						width={"10%"}
						className="text-center"
					/>{" "}
				</div>
			) : (
				<div>
					<p className="p-15px">
						{productFilter.length} Product(s) found
					</p>
					<div className="grid grid-cols-2 lg:grid-cols-4 md:grid-cols-3">
						{productFilter.map((product, index) => {
							return <Card product={product} key={index} />;
						})}
					</div>
				</div>
			)}
		</>
	);
};
export default Products;
