import * as actionTypes from './slices.types';

const initial_state = {
    pizzas: [
        [{
                id: 1,
                name: 'Margherita',
                description: 'A classic delight with 100% Real mozzarella cheese',
                isVeg: true,
                rating: 3.5,
                price: 239,
                img_url: 'https://upload.wikimedia.org/wikipedia/commons/6/6f/Pizza_on_stone.jpg',
                size: [{
                    isRadio: true,
                    title: 'choose size',
                    items: [{
                            size: 'Regular'
                        },
                        {
                            size: 'Medium'
                        },
                        {
                            size: 'Large'
                        }
                    ]
                }],
                toppings: [{
                    isRadio: false,
                    title: 'choose topping(s)',
                    items: [{
                            name: 'Red Pepper'
                        },
                        {
                            name: 'Onion'
                        },
                        {
                            name: 'Grilled Mushroom'
                        },
                        {
                            name: 'Extra Cheese'
                        },
                        {
                            name: 'Black Olive'
                        }
                    ]
                }]
            },
            {
                id: 2,
                name: 'Double Cheese Margherita',
                description: 'A classic delight loaded with extra 100% real mozzarella cheese',
                isVeg: true,
                rating: 5,
                price: 375,
                img_url: 'https://upload.wikimedia.org/wikipedia/commons/d/d1/Pepperoni_pizza.jpg',
                size: [{
                    isRadio: true,
                    title: 'choose size',
                    items: [{
                            size: 'Regular'
                        },
                        {
                            size: 'Medium'
                        },
                        {
                            size: 'Large'
                        }
                    ]
                }],
                toppings: [{
                    isRadio: true,
                    title: 'choose topping(s)',
                    items: [{
                            name: 'Red Pepper'
                        },
                        {
                            name: 'Onion'
                        },
                        {
                            name: 'Grilled Mushroom'
                        },
                        {
                            name: 'Extra Cheese'
                        },
                        {
                            name: 'Black Olive'
                        }
                    ]
                }]
            },
            {
                id: 3,
                name: 'Pepper Barbecue & Onion',
                description: 'A classic favorite with pepper barbeque chicken & onion',
                isVeg: false,
                rating: 4.5,
                price: 435,
                img_url: 'https://upload.wikimedia.org/wikipedia/commons/a/a3/Eq_it-na_pizza-margherita_sep2005_sml.jpg',
                size: [{
                    isRadio: true,
                    title: 'choose size',
                    items: [{
                            size: 'Regular'
                        },
                        {
                            size: 'Medium'
                        },
                        {
                            size: 'Large'
                        }
                    ]
                }],
                toppings: [{
                    isRadio: false,
                    title: 'choose topping(s)',
                    items: [{
                            name: 'Red Pepper'
                        },
                        {
                            name: 'Onion'
                        },
                        {
                            name: 'Grilled Mushroom'
                        },
                        {
                            name: 'Extra Cheese'
                        },
                        {
                            name: 'Black Olive'
                        }
                    ]
                }]
            },
            {
                id: 4,
                name: 'Cheese n Tomato',
                description: 'A delectable combination of cheese and juicy tomato',
                isVeg: true,
                rating: 3.5,
                price: 345,
                img_url: 'https://upload.wikimedia.org/wikipedia/commons/6/6f/Pizza_on_stone.jpg',
                size: [{
                    isRadio: true,
                    title: 'choose size',
                    items: [{
                            size: 'Regular'
                        },
                        {
                            size: 'Medium'
                        },
                        {
                            size: 'Large'
                        }
                    ]
                }],
                toppings: [{
                    isRadio: false,
                    title: 'choose topping(s)',
                    items: [{
                            name: 'Red Pepper'
                        },
                        {
                            name: 'Onion'
                        },
                        {
                            name: 'Grilled Mushroom'
                        },
                        {
                            name: 'Extra Cheese'
                        },
                        {
                            name: 'Black Olive'
                        }
                    ]
                }]
            },
            {
                id: 5,
                name: 'Cheese n Corn',
                description: 'Sweet & Juicy Golden corn and 100% real mozzarella cheese in a delectable combination !',
                isVeg: true,
                rating: 5,
                price: 345,
                img_url: 'https://upload.wikimedia.org/wikipedia/commons/d/d1/Pepperoni_pizza.jpg',
                size: [{
                    isRadio: true,
                    title: 'choose size',
                    items: [{
                            size: 'Regular'
                        },
                        {
                            size: 'Medium'
                        },
                        {
                            size: 'Large'
                        }
                    ]
                }],
                toppings: [{
                    isRadio: true,
                    title: 'choose topping(s)',
                    items: [{
                            name: 'Red Pepper'
                        },
                        {
                            name: 'Onion'
                        },
                        {
                            name: 'Grilled Mushroom'
                        },
                        {
                            name: 'Extra Cheese'
                        },
                        {
                            name: 'Black Olive'
                        }
                    ]
                }]
            },
            {
                id: 6,
                name: 'Achari Do Pyaza',
                description: 'Tangy & spicy achari flavors on a super cheesy onion pizza- as desi as it gets!',
                isVeg: true,
                rating: 4,
                price: 345,
                img_url: 'https://upload.wikimedia.org/wikipedia/commons/a/a3/Eq_it-na_pizza-margherita_sep2005_sml.jpg',
                size: [{
                    isRadio: true,
                    title: 'choose size',
                    items: [{
                            size: 'Regular'
                        },
                        {
                            size: 'Medium'
                        },
                        {
                            size: 'Large'
                        }
                    ]
                }],
                toppings: [{
                    isRadio: false,
                    title: 'choose topping(s)',
                    items: [{
                            name: 'Red Pepper'
                        },
                        {
                            name: 'Onion'
                        },
                        {
                            name: 'Grilled Mushroom'
                        },
                        {
                            name: 'Extra Cheese'
                        },
                        {
                            name: 'Black Olive'
                        }
                    ]
                }]
            },
            {
                id: 7,
                name: 'Chicken Golden Delight',
                description: 'Double pepper barbecue chicken, golden corn and extra cheese, true delight',
                isVeg: false,
                rating: 4.5,
                price: 490,
                img_url: 'https://upload.wikimedia.org/wikipedia/commons/6/6f/Pizza_on_stone.jpg',
                size: [{
                    isRadio: true,
                    title: 'choose size',
                    items: [{
                            size: 'Regular'
                        },
                        {
                            size: 'Medium'
                        },
                        {
                            size: 'Large'
                        }
                    ]
                }],
                toppings: [{
                    isRadio: false,
                    title: 'choose topping(s)',
                    items: [{
                            name: 'Red Pepper'
                        },
                        {
                            name: 'Onion'
                        },
                        {
                            name: 'Grilled Mushroom'
                        },
                        {
                            name: 'Extra Cheese'
                        },
                        {
                            name: 'Black Olive'
                        }
                    ]
                }]
            },
            {
                id: 8,
                name: 'Chicken Fiesta',
                description: 'Grilled chicken rashers, peri-peri chicken, onion & capsicum, a complete fiesta',
                isVeg: false,
                rating: 4,
                price: 490,
                img_url: 'https://upload.wikimedia.org/wikipedia/commons/d/d1/Pepperoni_pizza.jpg',
                size: [{
                    isRadio: true,
                    title: 'choose size',
                    items: [{
                            size: 'Regular'
                        },
                        {
                            size: 'Medium'
                        },
                        {
                            size: 'Large'
                        }
                    ]
                }],
                toppings: [{
                    isRadio: false,
                    title: 'choose topping(s)',
                    items: [{
                            name: 'Red Pepper'
                        },
                        {
                            name: 'Onion'
                        },
                        {
                            name: 'Grilled Mushroom'
                        },
                        {
                            name: 'Extra Cheese'
                        },
                        {
                            name: 'Black Olive'
                        }
                    ]
                }]
            },
            {
                id: 9,
                name: 'Pepper Barbecue Chicken',
                description: 'Pepper barbecue chicken for that extra zing',
                isVeg: false,
                rating: 3.5,
                price: '375',
                img_url: 'https://upload.wikimedia.org/wikipedia/commons/a/a3/Eq_it-na_pizza-margherita_sep2005_sml.jpg',
                size: [{
                    isRadio: true,
                    title: 'choose size',
                    items: [{
                            size: 'Regular'
                        },
                        {
                            size: 'Medium'
                        },
                        {
                            size: 'Large'
                        }
                    ]
                }],
                toppings: [{
                    isRadio: false,
                    title: 'choose topping(s)',
                    items: [{
                            name: 'Red Pepper'
                        },
                        {
                            name: 'Onion'
                        },
                        {
                            name: 'Grilled Mushroom'
                        },
                        {
                            name: 'Extra Cheese'
                        },
                        {
                            name: 'Black Olive'
                        }
                    ]
                }]
            },
            {
                id: 10,
                name: 'Veggie Paradise',
                description: 'The awesome foursome! Golden corn, black olives, capsicum, red paprika',
                isVeg: true,
                rating: 5,
                price: 435,
                img_url: 'https://upload.wikimedia.org/wikipedia/commons/6/6f/Pizza_on_stone.jpg',
                size: [{
                    isRadio: true,
                    title: 'choose size',
                    items: [{
                            size: 'Regular'
                        },
                        {
                            size: 'Medium'
                        },
                        {
                            size: 'Large'
                        }
                    ]
                }],
                toppings: [{
                    isRadio: true,
                    title: 'choose topping(s)',
                    items: [{
                            name: 'Red Pepper'
                        },
                        {
                            name: 'Onion'
                        },
                        {
                            name: 'Grilled Mushroom'
                        },
                        {
                            name: 'Extra Cheese'
                        },
                        {
                            name: 'Black Olive'
                        }
                    ]
                }]
            }
        ]
    ],
    cart: [],
    currItem: null,
    price: 0.0
};

//  const obj = {
//     id: '',
//     name: '',
//     price: 0,
//     rating: 0,
//     quantity: 0
// };

// manipulating the incoming data

const sliceReducer = (state = initial_state, action) => {
    switch (action.type) {
        case actionTypes.ADD_TO_CART:
            // console.log(action.payload.id);
            // console.log(state.pizzas[0][0].id);
            const found = state.pizzas[0].filter(
                (piz) => piz.id === action.payload.id
            )[0];

            const boolItemCart = state.cart.find((i) =>
                i.id === action.payload.id ? true : false
            );

            // console.log(found, boolItemCart);

            return {
                ...state,
                cart: boolItemCart ?
                    state.cart.map((item) =>
                        item.id === action.payload.id ?
                        {...item, qty: item.qty + 1 } :
                        {...item }
                    ) :
                    [...state.cart, {...found, qty: 1 }]
            };
        case actionTypes.REMOVE_FROM_CART:
            // const x = state.cart.filter((i) => i.id !== action.payload.id);
            // console.log(x);
            const QtyZero = state.cart.map((item) => (item.qty === 1 ? false : true));

            return {
                ...state,
                cart: QtyZero[0] ?
                    state.cart.map((item) =>
                        item.id === action.payload.id ?
                        {...item, qty: item.qty - 1 } :
                        {...item }
                    ) :
                    state.cart.filter((i) => i.id !== action.payload.id)
            };
        case actionTypes.QTY:
            return {
                ...state,
                cart: state.cart.map((i) =>
                    i.id === action.payload.id ? {...i, qty: action.payload.qty } : i
                )
            };

        default:
            return state;
    }
};

export default sliceReducer;