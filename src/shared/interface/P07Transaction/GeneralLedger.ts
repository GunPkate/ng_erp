export interface GeneralLedger{
    accountcontrolname: string
    accountheadname: string
    controlcode: string
    credit: number
    debit: number
    headcode: string
    date: string | null
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
            date: null
        }
    }
}

export interface tableLedger {
    accountcontrolname: string
    controlcode: string
    debit: valueDetail[]
    credit: valueDetail[]
}

export class InitialTableLedger{
    static InitialTableLedger(){
        return{
            accountcontrolname: "",
            controlcode: "",
            debit: [ ],
            credit: [ ]
        }
    }
}

export interface valueDetail {
    date?: string | null
    value: number
}