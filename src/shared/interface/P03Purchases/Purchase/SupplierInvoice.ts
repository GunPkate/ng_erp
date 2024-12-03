import { SupplierInvoiceDetail } from "./SupplierInvoiceDetails"
import { SupplierPayment } from "./SupplierPayment"

export interface SupplierInvoice{
    id: string
    supplierId: string
    userId: string
    invoiceNo: string
    title: string
    totalAmount: number
    date: Date
    description: string
    supplierInvoiceDetail: SupplierInvoiceDetail[]
    supplierPayment: SupplierPayment[]
}

export class InitialSupplierInvoice{
    static InitialSupplierInvoiceObj(){
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