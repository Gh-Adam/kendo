import { Component, OnInit } from "@angular/core";
import { expensesReports } from "./../../../shared/components/kendo-grid/products";
@Component({
  selector: "app-reports",
  templateUrl: "./reports.component.html",
  styleUrls: ["./reports.component.scss"],
})
export class ReportsComponent implements OnInit {
  type: number = 1
  columns: any[] = [
    { field: "Tracking#" },
    { field: "Title" },
    { field: "AssignedTo" },
    { field: "State" },
    { field: "TotalReimbursable" },
  ];
  records: any[] = [];
  counters: any;
  constructor() {}

  ngOnInit() {
    this.getData();
  }

  getData() {
    switch(this.type) {
      case 1: {
        this.records = expensesReports.filter(e => e.State.toLowerCase() === 'open');
        this.counters= {
          ...this.counters,
          openedCount: this.records.length
        };
        break;
      }
         
      case 2: {
      this.records = expensesReports.filter(e => e.State.toLowerCase() === 'submitted');
      this.counters= {
          ...this.counters,
          submittedCount: this.records.length
        };
    
      break;
      }
        
        
      case 3: {
      this.records = expensesReports.filter(e => e.State.toLowerCase() === 'awaiting action');
      this.counters= {
          ...this.counters,
          awaitingCount: this.records.length
        };
      
      break;
      }
        
       
      default: 
        this.records = []
    }
  }
}
