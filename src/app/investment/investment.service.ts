import { Injectable } from '@angular/core';
import { NewInvestment } from './investment.model';

@Injectable({ providedIn: 'root' })

export class InvestmentService {

    addInvestment(investmentData: NewInvestment) {
            const investment = {
                InitialValue: investmentData.InitialValue,
                AnnualInvestment: investmentData.AnnualInvestment,
                ExpectedReturn: investmentData.ExpectedReturn,
                InvestmentDuration: investmentData.InvestmentDuration,
               
            };
            return investment;
        }
    
};

// addInvestment(investmentData: NewInvestment): NewInvestment {
//     const investment = {
//         InitialValue: investmentData.InitialValue,
//         AnnualInvestment: investmentData.AnnualInvestment,
//         ExpectedReturn: investmentData.ExpectedReturn,
//         InvestmentDuration: investmentData.InvestmentDuration,
//         TotalInvestment: this.calculateTotalInvestment(investmentData)
//     };
//     return investment;
// }