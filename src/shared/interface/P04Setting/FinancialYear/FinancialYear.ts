export interface FinancialYear{
    financialYearId:  string
    financialYear: Date
    isActive: boolean
}

export class InitialFinancialYear{
    static InitialFinancialYearObj() {
        return {
            financialYearId: '',
            financialYear: new Date,
            isActive: false
        }
    }
    
}


