import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { NominationsRoutingModule } from "./nominations-routing.module";
import { ReportsComponent } from "./components/reports/reports.component";
import { CreateReportComponent } from "./components/create-report/create-report.component";
import { SharedModule, GridModule } from "@progress/kendo-angular-grid";
import {
  DateInputsModule,
  DatePickerModule,
} from "@progress/kendo-angular-dateinputs";
import { FormsModule } from "@angular/forms";
import { DropDownsModule } from "@progress/kendo-angular-dropdowns";

@NgModule({
  declarations: [ReportsComponent, CreateReportComponent],
  imports: [
    CommonModule,
    NominationsRoutingModule,
    SharedModule,
    FormsModule,
    DatePickerModule,
    DropDownsModule,
  ],
})
export class NominationsModule {}
