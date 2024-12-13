export interface CustomerPayment{
    paymentId: string
    customerId: string
    customerInvoiceNo: string
    userId: string
    invoiceNo: string
    totalAmount: number
    paymentAmount: number
    remainBalance: number
    date: Date
}

export class InitialCustomerPayment{
    static InitialCustomerPaymentObj(){
        return {
            paymentId: "",
            customerId: "",
            customerInvoiceNo: "",
            userId: "",
            invoiceNo: "",
            totalAmount: 0,
            paymentAmount: 0,
            remainBalance: 0,
            date: new Date,
        }
    }
}