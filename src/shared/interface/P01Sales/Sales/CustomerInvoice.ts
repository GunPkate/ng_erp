import { CustomerInvoiceDetail } from "./CustomerInvoiceDetails"
import { CustomerPayment } from "./CustomerPayment"

export interface CustomerInvoice{
    id: string
    supplierId: string
    userId: string
    invoiceNo: string
    title: string
    totalAmount: number
    date: Date
    description: string
    supplierInvoiceDetail: CustomerInvoiceDetail[]
    supplierPayment: CustomerPayment[]
}

export class InitialCustomerInvoice{
    static InitialCustomerInvoiceObj(){
        return {
            id: "",
            supplierId: "",
            userId: "",
            invoiceNo: "",
            title: "",
            totalAmount: 0,
            date: new Date,
            description: "",
            supplierInvoiceDetail: [],
            supplierPayment: []
        }
    }
}