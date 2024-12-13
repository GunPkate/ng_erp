import { CustomerInvoiceDetail } from "./CustomerInvoiceDetails"
import { CustomerPayment } from "./CustomerPayment"

export interface CustomerInvoice{
    id: string
    customerId: string
    userId: string
    invoiceNo: string
    title: string
    totalAmount: number
    date: Date
    description: string
    customerInvoiceDetail: CustomerInvoiceDetail[]
    customerPayment: CustomerPayment[]
}

export class InitialCustomerInvoice{
    static InitialCustomerInvoiceObj(){
        return {
            id: "",
            customerId: "",
            userId: "",
            invoiceNo: "",
            title: "",
            totalAmount: 0,
            date: new Date,
            description: "",
            customerInvoiceDetail: [],
            customerPayment: []
        }
    }
}