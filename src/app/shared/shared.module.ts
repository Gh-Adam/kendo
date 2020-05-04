import { GridModule } from "@progress/kendo-angular-grid";
import { DateInputsModule } from "@progress/kendo-angular-dateinputs";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { KendoGridComponent } from "./components/kendo-grid/kendo-grid.component";
import { KendoDatePickerComponent } from "./components/kendo-date-picker/kendo-date-picker.component";

@NgModule({
  declarations: [KendoGridComponent, KendoDatePickerComponent],
  imports: [CommonModule, GridModule, DateInputsModule],
  exports: [KendoGridComponent, KendoDatePickerComponent],
})
export class SharedModule {}
