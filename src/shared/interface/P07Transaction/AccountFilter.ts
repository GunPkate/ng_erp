import { AccountControl } from "../P04Setting/Account/AccountControl"

export interface AccountFilter{
    accountheadname: string,
    headcode: string
    accountcontrolname: string,
    controlcode: string
    title: string
    debit: number
    credit: number
}

export class InitialAccountFilter {
    static InitialAccountFilterObj(){
        return {
            accountheadname: "",
            headcode: "",
            accountcontrolname: "",
            controlcode: "",
            title: "",
            debit: 0,
            credit: 0,
        }
    }
}