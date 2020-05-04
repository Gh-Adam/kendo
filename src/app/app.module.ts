import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { SharedModule } from "./shared/shared.module";
import { NominationsModule } from "./nominations/nominations.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { InputsModule } from "@progress/kendo-angular-inputs";
import { DateInputsModule } from "@progress/kendo-angular-dateinputs";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // SharedModule,
    NominationsModule,
    BrowserAnimationsModule,
    InputsModule,
    DateInputsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
