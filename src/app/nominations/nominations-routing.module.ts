import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ReportsComponent } from "./components/reports/reports.component";
import { CreateReportComponent } from "./components/create-report/create-report.component";

const routes: Routes = [
  { path: "", component: ReportsComponent },
  { path: "create-report", component: CreateReportComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NominationsRoutingModule {}
