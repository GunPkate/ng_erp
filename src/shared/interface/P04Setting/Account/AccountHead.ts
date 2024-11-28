export interface AccountHead{
    id: string,
    accountHeadName: string,
    code: string
    accountHeadCode: string
}

export class InitialAccountHead {
    static InitialAccountHeadObj(){
        return {
            id: "",
            accountHeadName: "",
            code: "",
            accountHeadCode: ""
        }
    }
}