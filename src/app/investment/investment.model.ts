export interface Investment {
    InitialValue: number;
    AnnualInvestment: number;
    ExpectedReturn: number;
    InvestmentDuration: number; 
}

export interface NewInvestment{
    InitialValue: number;
    AnnualInvestment: number;
    ExpectedReturn: number;
    InvestmentDuration: number;
    TotalInvestment: number;
}