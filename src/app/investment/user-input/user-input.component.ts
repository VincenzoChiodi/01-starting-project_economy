import { Component,signal} from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- importa FormsModule

import { InvestmentService } from '../../investment.service';

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  // calculate = output<Investment>();
  newIntialValue = signal('0');
  newAnnualInvestment = signal('0');
  newExpetedReturn = signal('5');
  newInvestmentDuration = signal ('10');

  constructor(private investmentService: InvestmentService) {
   
  }
  createInvestment(){
    this.investmentService.calculateInvestmentResults({
      initialInvestment: +this.newIntialValue(),
      annualInvestment: +this.newAnnualInvestment(),
      expectedReturn: +this.newExpetedReturn(),
      duration: +this.newInvestmentDuration()
    })
      // this.calculate.emit({
      //   initialInvestment: +this.newIntialValue(),
      //   annualInvestment: +this.newAnnualInvestment(),
      //   expectedReturn: +this.newExpetedReturn(),
      //   duration: +this.newInvestmentDuration()
      // });
      this.newIntialValue.set('0');
      this.newAnnualInvestment.set('0');
      this.newExpetedReturn.set('5');
      this.newInvestmentDuration.set('10');
      }

  

}
