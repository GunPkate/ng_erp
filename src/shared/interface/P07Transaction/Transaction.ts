export interface Transaction {
    id: string
    financialYearId: string
    accountHeadCode: string
    accountControlCode: string
    invoiceNo: string
    invoiceDetailsId: string
    userId: string
    credit: number
    debit: number
    transactionDate: Date
    transactionTitle: string
    description: string
}

export class InitialTransaction{
    static InitialTransactionObj(){
        return {
            id: "",
            financialYearId: "",
            accountHeadCode: "",
            accountControlCode: "",
            invoiceNo: "",
            invoiceDetailsId: "",
            userId: "",
            credit: 0,
            debit: 0,
            transactionDate: new Date,
            transactionTitle: "",
            description: "",
        }
    }
}