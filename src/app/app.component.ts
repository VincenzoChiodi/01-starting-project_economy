import { Component,signal } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { InvestmentResultComponent } from './investment/investment-result/investment-result.component';
import { UserInputComponent } from './investment/user-input/user-input.component';

import type { Investment } from './investment.model';
@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports : [HeaderComponent,InvestmentResultComponent,UserInputComponent],
})
export class AppComponent {
  resultData = signal<{year: number;
                    interest: number;
                    valueEndOfYear: number;
                    annualInvestment: number;
                    totalInterest: number;
                    totalAmountInvested: number
  } [] |undefined>(undefined)
  oncalculateInvestmentResults(data:Investment) {
    const {initialInvestment, annualInvestment, expectedReturn, duration} = data;

    const annualData = [];
    let investmentValue = initialInvestment;
  
    for (let i = 0; i < duration; i++) {
      const year = i + 1;
      const interestEarnedInYear = investmentValue * (expectedReturn / 100);
      investmentValue += interestEarnedInYear + annualInvestment;
      const totalInterest =
        investmentValue - annualInvestment * year - initialInvestment;
      annualData.push({
        year: year,
        interest: interestEarnedInYear,
        valueEndOfYear: investmentValue,
        annualInvestment: annualInvestment,
        totalInterest: totalInterest,
        totalAmountInvested: initialInvestment + annualInvestment * year,
      });
    }
  
    this.resultData.set(annualData);
  }
}
