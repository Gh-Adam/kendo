import { Component, OnInit } from "@angular/core";
import { IntlService } from "@progress/kendo-angular-intl";
@Component({
  selector: "app-create-report",
  templateUrl: "./create-report.component.html",
  styleUrls: ["./create-report.component.scss"],
})
export class CreateReportComponent implements OnInit {
  startDate: Date = new Date();
  endDate: Date = new Date();
  originators: Array<string> = [
    "Mai Fady",
    "Ghada Aki",
    "Ahmed Khater",
    "Nada Ahmed",
    "Ali Mahmoud",
    "Dina Ali",
    "Noor Yasser",
    "Menna Ahmed",
  ];
  workflows: Array<string> = ["Standard", "Not Standard", "Custom"];
  originator = this.originators[3];
  workflow = this.workflows[0];
  constructor() {}

  ngOnInit() {}
}
