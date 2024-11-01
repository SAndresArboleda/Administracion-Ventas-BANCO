import {
    LOGIN,
    GET_ALL_PRODUCTS,
    GET_ALL_USERS,
    POST_PRODUCT,
    POST_USER,
    GET_PRODUCT_ID,
    GET_USER_ID,
    PUT_VENTA_ID,

} from './action'

let initialsState = {
    isAuthenticated: false,
    user: null,
    token: null,
    error: null,
    allVentas: [],
    allUsers: [],
    login: [],
    postproduct: [],
    postUser: [],
    VentaId: [],
}

const reducer = (state = initialsState, action) => {
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                isAuthenticated: true,
                user: action.payload.user,
                token: action.payload.token,
                error: null

            };
        case GET_ALL_PRODUCTS:
            return {
                ...state,
                allVentas: action.payload
            }
        case GET_ALL_USERS:
            return {
                ...state,
                allUsers: action.payload
            }
        case POST_PRODUCT:
            return {
                ...state,
                postproduct: action.payload
            }
        case POST_USER:
            return {
                ...state,
                postUser: action.payload
            }
        case GET_PRODUCT_ID:
            return {
                ...state,
                VentaId: action.payload
            }
        case GET_USER_ID:
            return {
                ...state,
                allUsers: action.payload
            }
        case PUT_VENTA_ID:
            return {
                ...state,
                VentaId: action.payload
            }


        default:
            return state;
    }
};

export default reducer;

