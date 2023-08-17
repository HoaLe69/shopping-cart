import { combineReducers } from "redux";
const init = {
	sizes: [],
};
const sizeReducer = (state = init, action) => {
	switch (action.type) {
		case "ADD_SIZE": {
			const newList = [...state.sizes, action.payload];
			return {
				...state,
				sizes: newList,
			};
		}
		case "REMOVE_SIZE": {
			const newList = [...state.sizes].filter(
				(size) => size !== action.payload
			);
			return {
				...state,
				sizes: newList,
			};
		}
		default:
			return state;
	}
};
const showModal = (state = false, action) => {
	switch (action.type) {
		case "SHOW_MODAL": {
			return action.payload;
		}
		case "HIDE_MODAL": {
			return action.payload;
		}
		default:
			return state;
	}
};
const addToCard = (state = [], action) => {
	switch (action.type) {
		case "ADD_PRODUCT": {
			const newList = [...state];
			const newProduct = { ...action.payload, quantity: 1 };
			let position = -1;
			state.forEach((item, index) => {
				if (item.name === action.payload.name) {
					position = index;
					return;
				}
			});
			if (position != -1) {
				newProduct.quantity += state[position].quantity;
				newList.splice(position, 1);
				newList.splice(position, 0, newProduct);
			} else newList.push(newProduct);
			return [...newList];
		}
		case "DELETE_PRODUCT": {
			const newList = state.filter(
				(state) => state.name !== action.payload
			);
			return [...newList];
		}
		default:
			return state;
	}
};
const quantity = (state = { quantity: 0, total: 0.0 }, action) => {
	switch (action.type) {
		case "INCREASE": {
			const newState = {
				quantity: parseInt(state.quantity + action.payload[0]),
				total: state.total + action.payload[1],
			};
			return {
				...state,
				...newState,
			};
		}
		case "DECREASE": {
			const newState = {
				quantity: parseInt(state.quantity - action.payload[0]),
				total: state.total - action.payload[1],
			};
			return {
				...state,
				...newState,
			};
		}
		default:
			return state;
	}
};
const rootReducers = combineReducers({
	chooseSize: sizeReducer,
	modal: showModal,
	addToCard: addToCard,
	quantity: quantity,
});
export default rootReducers;
