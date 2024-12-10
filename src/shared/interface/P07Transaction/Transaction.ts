export interface Transaction {
    id: string
    financialYearId: string
    accountHeadCode: string
    accountControlCode: string
    accountSubcontrolCode: string
    invoiceNo: string
    userId: string
    credit: number
    debit: number
    transaction_date: Date
    transaction_title: string
    description: string
}

export class InitialTransaction{
    static InitialTransactionObj(){
        return {
            id: "",
            financialYearId: "",
            accountHeadCode: "",
            accountControlCode: "",
            accountSubcontrolCode: "",
            invoiceNo: "",
            userId: "",
            credit: 0,
            debit: 0,
            transaction_date: new Date,
            transaction_title: "",
            description: "",
        }
    }
}