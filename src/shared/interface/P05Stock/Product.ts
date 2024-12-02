export interface Product{
    id: string
    productId: string
    catagoryId: string
    productName: string
    quantity: string
    salePrice: string
    currentPurchasePrice: string
    description: string
    category: string
    expiryDate: string
    manuDate: string
    stockThresholdQty: string
    userId: string
}

export class InitialProduct{
    static InitialProductObj(){ 
        return {
        id: "",
        productId: "",
        catagoryId: "",
        productName: "",
        quantity: "",
        salePrice: "",
        currentPurchasePrice: "",
        description: "",
        category: "",
        expiryDate: "",
        manuDate: "",
        stockThresholdQty: "",
        userId: "",
        }
    }
}