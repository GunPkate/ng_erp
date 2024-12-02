export interface Category{
    id: string
    categoryName: string
}

export class InitialCategory{
    static InitialCategoryObj(){
        return {
            id: "",
            categoryName: ""
        }
    }
}