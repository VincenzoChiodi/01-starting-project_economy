import { Component, Input} from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- importa FormsModule

import { Investment } from './investment.model';
@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  newIntialValue= 0;
  newAnnualInvestment = 0;
  newExpetedReturn = 0;
  newInvestmentDuration = 0;
  createInvestment(){
    const investment ={
      InitialVaule: this.newIntialValue,
      AnnualInvestment: this.newAnnualInvestment,
      ExpetedReturn: this.newExpetedReturn,
      InvestmentDuration: this.newInvestmentDuration,
    }
  }

}
