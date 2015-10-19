import Immutable from 'immutable';

const customers = {
    0: {
        id: 0,
        name: 'Susie',
        status: 'Interested'
    },
    1: {
        id: 1,
        name: 'Bob',
        status: null
    },
    2: {
        id: 2,
        name: 'Angel',
        status: 'Inactive'
    }
};

export default Immutable.fromJS({
    current_customer_id: 1,
    customers: customers
});