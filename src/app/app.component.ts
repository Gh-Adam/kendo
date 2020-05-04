import { Component } from "@angular/core";
import { Router } from "@angular/router";
// import { expensesReports } from "./shared/components/kendo-grid/products";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  constructor(private router: Router) {}

  showView = true;
  title = "testing-kendo";
  // records = expensesReports
  // columns: any[] = [
  //   { field: "Tracking#" },
  //   { field: "Title" },
  //   { field: "AssignedTo" },
  //   { field: "State" },
  //   { field: "TotalReimbursable" },
  // ];

  createReport() {
    this.showView = false;
    this.router.navigateByUrl("reports/create-report");
  }
}
