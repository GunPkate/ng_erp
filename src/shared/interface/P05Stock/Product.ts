export interface Stock{
    id: string
    productId: string
    catagoryId: string
    productName: string
    quantity: number
    salePrice: number
    currentPurchasePrice: number
    description: string
    expiryDate: Date
    manuDate: Date
    stockThresholdQty: number
    userId: string
}

export class InitialStock{
    static InitialStockObj(){ 
        return {
        id: "",
        productId: "",
        catagoryId: "",
        productName: "",
        quantity: 0,
        salePrice: 0,
        currentPurchasePrice: 0,
        description: "",
        expiryDate: new Date(),
        manuDate: new Date(),
        stockThresholdQty: 0,
        userId: "",
        }
    }
}