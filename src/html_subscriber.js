function templateCustomer(customer) {
    return '<div data-id="' + customer.id + '">' +
            customer.name + ' - ' + customer.status || 'No Current Status';
        '</div>';
}

function templateStatusFormSelect(customers) {
    function templateSelectOption(customer) {
        return '<option value="' + customer.get("id") + '">' + customer.get("name") + '</option>';
    };
    return customers.reduce((previousCustomer, currentCustomer, i) => {
        if (i === 0) {
            //console.log(previousCustomer.toObject());
            previousCustomer = templateSelectOption(previousCustomer);
        }
        //console.log(currentCustomer.toObject());
        return previousCustomer + templateSelectOption(currentCustomer);
    }, '');
}

export default (store) => () => {
    let state = store.getState();
    let customers = state.get('customers') || [];
    let currentCustomerId = state.getIn(['current_custom_id']);

    if (currentCustomerId !== undefined) {
        let currentCustomer = state.getIn(['customers', currentCustomerId.toString()]);
        document.getElementById('currentCustomer').innerHTML =
            templateCustomer(currentCustomer.toObject());
    }

    document.getElementById('customers').innerHTML = '';
    customers.forEach((customer) => {
        document.getElementById('customers').innerHTML +=
            templateCustomer(customer.toObject());
    });

    document.getElementById('statusFormOptions').innerHTML = templateStatusFormSelect(customers);
}