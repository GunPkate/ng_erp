export interface AccountControl{
    id: string
    accountControlName: string
    code: string
    accountHeadCode: string
}

export class InitialAccountControl {
    static InitialAccountControlObj(){
        return {
            id:"",
            accountControlName:"",
            code:"",
            accountHeadCode:"",
        }
    }
}