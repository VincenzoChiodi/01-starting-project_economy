import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { InvestmentResultComponent } from "./investment/investment-result/investment-result.component";
import { UserInputComponent } from "./investment/user-input/user-input.component";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";

@NgModule({
    declarations:[AppComponent,HeaderComponent,InvestmentResultComponent,UserInputComponent],
    imports:[FormsModule,BrowserModule],
    bootstrap:[AppComponent]
})

export class AppModule {}