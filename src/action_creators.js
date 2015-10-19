export const SET_CURRENT_CUSTOMER = 'SET_CURRENT_CUSTOMER';
export const SET_CUSTOMER_STATUS = 'SET_CUSTOMER_STATUS';

export function setCurrentCustomer(customerId)
{
    return {
        type: SET_CURRENT_CUSTOMER,
        customerId
    };
}

export function setCustomerStatus(customerId, status)
{
    return {
        type: SET_CUSTOMER_STATUS,
        customerId,
        status
    };
}