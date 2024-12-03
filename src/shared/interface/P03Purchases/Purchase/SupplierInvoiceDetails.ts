export interface SupplierInvoiceDetail{
    id: string
    supplierInvoiceId: string
    productId: string
    purchaseQty: number
    purchaseUnitPrice: number
}

export class InitialSupplierInvoiceDetail{
    static InitialSupplierInvoiceDetailObj(){
        return {
            id: "",
            supplierInvoiceId: "",
            productId: "",
            purchaseQty: 0,
            purchaseUnitPrice: 0,
        }
    }
}