import { Component, OnInit } from "@angular/core";
import { expensesReports } from "./../../../shared/components/kendo-grid/products";
@Component({
  selector: "app-reports",
  templateUrl: "./reports.component.html",
  styleUrls: ["./reports.component.scss"],
})
export class ReportsComponent implements OnInit {
  columns: any[] = [
    { field: "Tracking#" },
    { field: "Title" },
    { field: "AssignedTo" },
    { field: "State" },
    { field: "TotalReimbursable" },
  ];
// columns = [{ field: "ProductID" }, { field: "ProductName" }, { field: "QuantityPerUnit" }];
records = expensesReports
  constructor() {}

  ngOnInit() {
    
    console.log("records", this.records);
  }
}
