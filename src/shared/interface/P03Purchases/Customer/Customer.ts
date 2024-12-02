export interface Customer {
    customerId: string
    customerName: string
    address: string
    email: string
    contactNo: string
    description: string
}

export class InitialCustomer{
    static InitialCustomerObj() {
        return {
            customerId: '',
            customerName: '',
            address: '',
            email: '',
            contactNo: '',
            description: '',
        }
    }
}