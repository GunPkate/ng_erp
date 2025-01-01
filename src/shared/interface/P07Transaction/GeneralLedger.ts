export interface GeneralLedger{
    accountcontrolname: string
    accountheadname: string
    controlcode: string
    credit: number
    debit: number
    headcode: string
}

export class InitialGeneralLedger{
    static InitialGeneralLedger(){
        return{
            accountcontrolname:"",
            accountheadname:"",
            controlcode:"",
            credit:0,
            debit:0,
            headcode:"",
        }
    }
}