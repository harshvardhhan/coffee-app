import {ADD_COFFEE, DELETE_COFFEE, EDIT_COFFEE, GET_COFFEES} from '../constants/coffee';

export function coffee(state = [], action) {
    switch (action.type) {
    case GET_COFFEES:
        return action.coffee;
    case ADD_COFFEE:
        return state.concat([action.coffee]);
    case DELETE_COFFEE:
        return state.filter((value, i) => i !== action.coffee);
    case EDIT_COFFEE:
        return state.map((value, i) => {
            if (i === action.coffee.selectedCoffee) {
                return {...value, ...action.coffee};
            }
            return value;
        });
    default:
        return state;
    }
}
