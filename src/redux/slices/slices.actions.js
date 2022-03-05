import * as actionTypes from './slices.types';

export const addToCart = (itemID) => {
    return {
        type: actionTypes.ADD_TO_CART,
        payload: {
            id: itemID
        }
    };
};

// export const incrementQty = (itemID) => {
//     return {
//         type: actionTypes.INCREMENT,
//         payload: itemID
//     };
// };

export function removeFromCart(itemID) {
    return {
        type: actionTypes.REMOVE_FROM_CART,
        payload: {
            id: itemID
        }
    };
}

// still have to add this functionality
export function adjustQty(itemID, value) {
    return {
        type: actionTypes.QTY,
        payload: {
            id: itemID,
            qty: value
        }
    };
}