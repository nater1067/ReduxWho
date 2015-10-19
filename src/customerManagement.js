/**
 * Our reducer
 */
import { Map } from 'immutable';
import INITIAL_STATE from './initial_state.js';
import { SET_CURRENT_CUSTOMER, SET_CUSTOMER_STATUS } from './action_creators.js';

function setCurrentCustomer(state, customerId) {
    return state.set('current_custom_id', customerId);
}

function setCustomerStatus(state, customerId, status) {
    // Note that we must use strings for our index selectors
    return state.setIn(['customers', customerId.toString(), 'status'], status);
}

export default function(state = INITIAL_STATE, action) {
    switch (action.type) {
        case SET_CURRENT_CUSTOMER:
            return setCurrentCustomer(state, action.customerId);
        case SET_CUSTOMER_STATUS:
            return setCustomerStatus(state, action.customerId, action.status);
        default:
            return state;
    }
}