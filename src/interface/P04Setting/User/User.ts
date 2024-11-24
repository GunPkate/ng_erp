export interface User{
    first_name: string
    last_name: string
    email: string
    contact_no: string
    username: string
    password: string
    user_type_id: string
}

export class InitialUser {
    static  InitialUserObj(){
        return {
            first_name: "",
            last_name: "",
            email: "",
            contact_no: "",
            username: "",
            password: "",
            user_type_id: "",
        }
    }
}