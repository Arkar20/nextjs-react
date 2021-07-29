import {HYDRATE, createWrapper} from 'next-redux-wrapper';

import {createStore} from 'redux';

const initialstate = {
    server: {},
    client:{}
}
// create your reducer
const reducer = (state = initialstate, action) => {
    switch (action.type) {
        case HYDRATE:
            return {
                ...state,
                server: {
                    ...state.server,
                    ...action.payload.server
                }
            }
        case 'SERVER_ADD_GAMES':
            return {
                ...state,
                server: {
                    ...state.server,
                    data:{...action.payload}
                }
            };
        
        default:
            return state;
    }
};

// create a makeStore function
const makeStore = context => createStore(reducer);

// export an assembled wrapper
export const wrapper = createWrapper(makeStore, {debug: true});
