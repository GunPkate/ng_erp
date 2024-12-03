export interface CustomerInvoiceDetail{
    id: string
    supplierInvoiceId: string
    productId: string
    purchaseQty: number
    purchaseUnitPrice: number
}

export class InitialCustomerInvoiceDetail{
    static InitialCustomerInvoiceDetailObj(){
        return {
            id: "",
            supplierInvoiceId: "",
            productId: "",
            purchaseQty: 0,
            purchaseUnitPrice: 0,
        }
    }
}