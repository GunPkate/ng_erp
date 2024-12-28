export interface Stock{
    id: string
    productId: string
    catagoryId: string
    status: string
    quantity: number
    price: number
    description: string
    expiryDate: Date
    manuDate: Date
    userId: string,
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
            description: "",
            expiryDate: new Date(),
            manuDate: new Date(),
            userId: "",
        }
    }
}