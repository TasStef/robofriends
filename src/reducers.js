import {
    CHANGE_SEARCH_FIELD,
    REQUEST_ROBOTS_FAILED,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_PENDING
} from "./constants.js";

const initialState = {
    initialStateSearch: {
        searchField: ''
    },
    initialStateRobots: {
        isPending: false,
        robots: [],
        error: '',
    }
}

export const searchRobots = (state = initialState.initialStateSearch, action ) => {
    switch (action.type) {
        case CHANGE_SEARCH_FIELD:
            // return Object.assign({}, state, {searchField: action.payload}); // This is the same as the spread operator below
            return {...state, searchField: action.payload};
        default:
            return state;
    }
}

export const requestRobots = (state = initialState.initialStateRobots, action ) => {
    switch (action.type) {
        case REQUEST_ROBOTS_PENDING:
            return {...state, isPending: true};
        case REQUEST_ROBOTS_SUCCESS:
            return {...state, robots: action.payload, isPending: false};
        case REQUEST_ROBOTS_FAILED:
            return {...state, error: action.payload, isPending: false};
        default:
            return state;
    }
}
