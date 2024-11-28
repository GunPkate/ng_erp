export interface User{
    userId: string
    firstName: string
    lastName: string
    email: string
    contactNo: string
    username: string
    password: string
    userTypeId: string
}

export class InitialUser {
    static  InitialUserObj(){
        return {
            userId: "",
            firstName: "",
            lastName: "",
            email: "",
            contactNo: "",
            username: "",
            password: "",
            userTypeId: "",
        }
    }
}