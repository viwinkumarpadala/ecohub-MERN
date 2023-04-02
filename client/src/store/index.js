import { createStore } from "redux";

const initialState = { userIsLoggedIn: false, cart: [], userDet: {} };

const reducingFunction = (state = initialState, action) => {
	if (action.type === "login") {
		return {
			...state,
			userIsLoggedIn: true,
			userDet: action.userDetails,
		};
	}
	if (action.type === "logout") {
		localStorage.removeItem("ecohub-email")
		return {
			...state,
			userIsLoggedIn: false,
			userDet: {},
		};
	}

	if (action.type === "add-to-cart") {
		console.log(action.product, state.cart);
		let tempCart = new Set(state.cart);
		tempCart.add(action.product);
		return {
			...state,
			cart: Array.from(tempCart),
		};
	}

	if(action.type === 'clear-cart') {
		return {
			...state, 
			cart: []
		}
	}

	if(action.type === 'remove-item-from-cart'){
		return {
			...state,
			cart: state.cart.filter((item) => item._id.$oid !== action.productId)
		}
	}

	return state;
};

// takes in reducer function and initial state
const store = createStore(reducingFunction);

export default store;
