export interface Stock{
    id: string
    productId: string
    catagoryId: string
    status: string
    quantity: number
    price: number
    invoiceDetailId: string
    expiryDate: Date
    manuDate: Date
    userId: string,
    usedQty: number
}

export class InitialStock{
    static InitialStockObj(){ 
        return {
            id: "",
            productId: "",
            catagoryId: "",
            status: "",
            quantity: 0,
            price: 0,
            invoiceDetailId: "",
            expiryDate: new Date(),
            manuDate: new Date(),
            userId: "",
            usedQty: 0
        }
    }
}