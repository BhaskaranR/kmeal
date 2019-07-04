import { Component, OnInit, ViewChild } from "@angular/core";
import { MatPaginator, MatSort } from "@angular/material";
import { OrderBlotterDataSource } from "./order-blotter-datasource";

@Component({
  selector: "kmeal-nx-order-blotter",
  templateUrl: "./order-blotter.component.html",
  styleUrls: ["./order-blotter.component.scss"]
})
export class OrderBlotterComponent implements OnInit {
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  dataSource: OrderBlotterDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ["id", "name"];

  ngOnInit() {
    this.dataSource = new OrderBlotterDataSource(this.paginator, this.sort);
  }
}
