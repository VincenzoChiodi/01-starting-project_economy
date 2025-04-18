import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { InvestmentResultComponent } from "./investment/investment-result/investment-result.component";

import { UserInputModule } from "./investment/user-input/user-imput.module"; 
import { BrowserModule } from "@angular/platform-browser";

@NgModule({
    declarations:[AppComponent,HeaderComponent,InvestmentResultComponent],
    imports:[UserInputModule,BrowserModule],
    bootstrap:[AppComponent]
})

export class AppModule {}