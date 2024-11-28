export interface UserType {
    id: string
    userType: string
}

export class InitialUserType {
    static InitialUserTypeObj(){
        return {
            id: "",
            userType: ""
        }
    }
}