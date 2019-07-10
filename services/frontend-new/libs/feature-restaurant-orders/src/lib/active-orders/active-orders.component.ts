import { Component, OnInit, ViewChild } from "@angular/core";
import { MatPaginator, MatSort } from "@angular/material";
import { OrderBlotterDataSource } from "./order-blotter-datasource";


@Component({
  selector: "kmeal-nx-order-blotter-active-orders",
  templateUrl: "./active-orders.component.html",
})
export class ActiveOrdersComponent implements OnInit {
    @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
    @ViewChild(MatSort, { static: true }) sort: MatSort;
    dataSource: OrderBlotterDataSource;
  
    /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
    displayedColumns = ["id", "name"];
  
    ngOnInit() {
      this.dataSource = new OrderBlotterDataSource(this.paginator, this.sort);
    }
}