import { Component,output,signal} from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- importa FormsModule


import type { Investment } from '../../investment.model';
@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  calculate = output<Investment>();
  newIntialValue = signal('0');
  newAnnualInvestment = signal('0');
  newExpetedReturn = signal('5');
  newInvestmentDuration = signal ('10');
 
  createInvestment(){
      this.calculate.emit({
        initialInvestment: +this.newIntialValue(),
        annualInvestment: +this.newAnnualInvestment(),
        expectedReturn: +this.newExpetedReturn(),
        duration: +this.newInvestmentDuration()
      });
      this.newIntialValue.set('0');
      this.newAnnualInvestment.set('0');
      this.newExpetedReturn.set('5');
      this.newInvestmentDuration.set('10');
      }

  

}
