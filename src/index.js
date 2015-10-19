import { createStore } from 'redux';
import customerManagment from './customerManagement';
import { setCurrentCustomer, setCustomerStatus } from './action_creators';
import htmlSubscriber from './html_subscriber.js';

/**
 * You should only create one store for an application
 * We pass the store our reducer, customerManagment
 */
const store = createStore(customerManagment);

store.subscribe(htmlSubscriber(store));

store.dispatch(setCurrentCustomer(1));
store.dispatch(setCustomerStatus(1, 'Completely Satisfied'));

document.getElementById("customers").addEventListener("click", function (e) {
    let customerId = e.target.dataset.id;
    store.dispatch(setCurrentCustomer(customerId));
});

document.getElementById("setCustomerStatus").addEventListener("click",function() {
    let select = document.getElementById("statusFormOptions");
    let customerId = select.options[select.selectedIndex].value;
    let customerStatus = document.getElementById("customerStatus").value;
    store.dispatch(setCustomerStatus(customerId, customerStatus));
});