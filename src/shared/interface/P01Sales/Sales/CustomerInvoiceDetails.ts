export interface CustomerInvoiceDetail{
    id: string
    customerInvoiceId: string
    productId: string
    saleQty: number
    saleUnitPrice: number
}

export class InitialCustomerInvoiceDetail{
    static InitialCustomerInvoiceDetailObj(){
        return {
            id: "",
            customerInvoiceId: "",
            productId: "",
            saleQty: 0,
            saleUnitPrice: 0,
        }
    }
}