export interface CustomerPayment{
    paymentId: string
    supplierId: string
    supplierInvoiceNo: string
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
            supplierId: "",
            supplierInvoiceNo: "",
            userId: "",
            invoiceNo: "",
            totalAmount: 0,
            paymentAmount: 0,
            remainBalance: 0,
            date: new Date,
        }
    }
}