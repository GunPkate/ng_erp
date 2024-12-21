import { AccountControl } from "../P04Setting/Account/AccountControl"

export interface AccountFilter{
    accountHeadName: string,
    headCode: string
    accountControlName: string,
    controlcode: string
    title: string
    debit: number
    credit: number
}

export class InitialAccountFilter {
    static InitialAccountFilterObj(){
        return {
            accountHeadName: "",
            headCode: "",
            accountControlName: "",
            controlcode: "",
            title: "",
            debit: 0,
            credit: 0,
        }
    }
}