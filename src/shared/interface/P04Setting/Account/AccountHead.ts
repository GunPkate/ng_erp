export interface AccountHead{
    id: string,
    accountHeadName: string,
    code: string
}

export class InitialAccountHead {
    static InitialAccountHeadObj(){
        return {
            id: "",
            accountHeadName: "",
            code: ""
        }
    }
}