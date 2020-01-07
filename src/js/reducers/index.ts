import { ADD_ARTICLE } from "../constants/action-types";

interface StateType {
	articles: any[];
}
const initialState: StateType = {
	articles: [],
};

function rootReducer(state = initialState, action: any) {
	if (action.type === ADD_ARTICLE) {
		Object.assign({}, state, {
			articles: state.articles.concat(action.payload),
		});
	}
	return state;
}

export default rootReducer;
