import { Component, OnInit, Input } from "@angular/core";
import {
  GridDataResult,
  DataStateChangeEvent,
  PageChangeEvent,
} from "@progress/kendo-angular-grid";
import { products, expensesReports } from "./products";
import {
  process,
  State,
  SortDescriptor,
  orderBy,
} from "@progress/kendo-data-query";
@Component({
  selector: "app-kendo-grid",
  templateUrl: "./kendo-grid.component.html",
  styleUrls: ["./kendo-grid.component.scss"],
})
export class KendoGridComponent implements OnInit {
  // @Input() records: any[];
  // @Input() columns: any[];
  // public columns: any[] = [{ field: "ProductID" }, { field: "ProductName" }, { field: "QuantityPerUnit" }];
  columns: any[] = [
    { field: "Tracking#" },
    { field: "Title" },
    { field: "AssignedTo" },
    { field: "State" },
    { field: "TotalReimbursable" },
  ];
  public pageSize: number = 20;
  public state: State = {
    skip: 0,
    take: 20,
  };
  public sort: SortDescriptor[];
  public gridData: GridDataResult;
  records: any[];
  constructor() {}

  ngOnInit() {
    this.records = expensesReports;
    this.gridData = process(this.records, this.state);
  }
  /**
   * Handles filtering
   * @param state
   */
  dataStateChange(state: DataStateChangeEvent) {
    this.state = state;
    this.gridData = process(this.records, this.state);
  }
  /**
   * Handles sorting
   * @param sort
   */
  sortChange(sort: SortDescriptor[]) {
    this.sort = sort;
    this.loadProducts();
  }
  /**
   * Loads all products
   */
  loadProducts() {
    this.gridData = {
      data: orderBy(this.records, this.sort),
      total: this.records.length,
    };
  }
  /**
   * Changes page
   */
  changePage() {
    this.gridData = {
      data: this.records.slice(
        this.state.skip,
        this.state.skip + this.pageSize
      ),
      total: this.records.length,
    };
  }
  /**
   * Handles page change event
   * @param event
   */
  pageChange({ skip, take }: PageChangeEvent) {
    this.state.skip = skip;
    this.pageSize = take;
    this.changePage();
  }
}
