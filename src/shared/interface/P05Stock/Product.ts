export interface Product{
    id: string
    productName: string
    stockThresholdQty: number
    catagoryId: string
    // userId: string
}

export class InitialProduct{
    static InitialProductObj(){ 
        return {
            id: "",
            productName: "",
            stockThresholdQty: 0,
            catagoryId: ""
            // userId: "",
        }
    }
}