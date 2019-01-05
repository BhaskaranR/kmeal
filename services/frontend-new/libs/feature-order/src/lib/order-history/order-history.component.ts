import { Component, OnInit, ViewChild } from "@angular/core";
import { MatPaginator, MatSort } from "@angular/material";
import { OrderHistoryDataSource } from "./order-history-datasource";

@Component({
  selector: "kmeal-nx-order-history",
  templateUrl: "./order-history.component.html",
  styleUrls: ["./order-history.component.scss"]
})
export class OrderHistoryComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: OrderHistoryDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ["id", "name"];

  ngOnInit() {
    this.dataSource = new OrderHistoryDataSource(this.paginator, this.sort);
  }
}
