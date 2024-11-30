export interface AccountSubcontrol{
    id: string,
    accountSubcontrolName: string,
    code: string
    accountControlCode: string
}

export class InitialAccountSubcontrol {
    static InitialAccountSubcontrolObj(){
        return {
            id: "",
            accountSubcontrolName: "",
            code: "",
            accountControlCode: ""
        }
    }
}