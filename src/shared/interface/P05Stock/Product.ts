export interface Product{
    id: string
    productName: string
    stockThresholdQty: number
    // userId: string
}

export class InitialProduct{
    static InitialProductObj(){ 
        return {
            id: "",
            productId: "",
            productName: "",
            // userId: "",
        }
    }
}