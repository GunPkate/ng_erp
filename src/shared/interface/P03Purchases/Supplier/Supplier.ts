export interface Supplier {
    supplierId: string
    supplierName: string
    address: string
    email: string
    contactNo: string
    description: string
}

export class InitialSupplier {
    static InitialSupplierObj(){
        return {
            supplierId: "",
            supplierName: "",
            address: "",
            email: "",
            contactNo: "",
            description: "",
        }
    }
}