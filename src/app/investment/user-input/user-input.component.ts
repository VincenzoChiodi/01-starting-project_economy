import { Component,EventEmitter,Output, Input, inject} from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- importa FormsModule
import { InvestmentService } from '../investment.service';

import {type Investment } from '../investment.model';
@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  @Output() calculate = new EventEmitter<{initialInvestment:number; annualInvestment:number; expectedReturn:number; duration:number}>();
  newIntialValue= '0';
  newAnnualInvestment = '0';
  newExpetedReturn = '5';
  newInvestmentDuration = '10';
 
  createInvestment(){
      this.calculate.emit({
        initialInvestment: +this.newIntialValue,
        annualInvestment: +this.newAnnualInvestment,
        expectedReturn: +this.newExpetedReturn,
        duration: +this.newInvestmentDuration
      });
      }

  

}
