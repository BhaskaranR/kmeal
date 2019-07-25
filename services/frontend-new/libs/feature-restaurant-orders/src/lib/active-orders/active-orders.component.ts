import { Component, OnInit, ViewChild } from "@angular/core";
import { MatPaginator, MatSort, MatTableDataSource } from "@angular/material";
import { OrderBlotterDataSource, EXAMPLE_DATA } from "./order-blotter-datasource";
import { OrderService } from "../services/order.service";
import {PageEvent} from '@angular/material';


@Component({
  selector: "kmeal-nx-order-blotter-active-orders",
  templateUrl: "./active-orders.component.html",
})
export class ActiveOrdersComponent implements OnInit {
    @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
    @ViewChild(MatSort, { static: true }) sort: MatSort;
    dataSource: MatTableDataSource<object>;
  
    /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
    displayedColumns = ["id", "name",'address','status','details'];
    pageSize:number = 10;
    pageSizeOptions : number[] = [5,10,20,50];

    orderList;
    constructor(private orderService: OrderService){
      
    }
  
    async ngOnInit() {
      this.dataSource = new MatTableDataSource(EXAMPLE_DATA);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;

      this.orderList = await this.orderService.getMyOrders();
      console.log(this.orderList, ' order list');
    }

    onClickOrder(evt){
      console.log(evt, ' row clicked');
    }

    applyFilter(filterValue: string) {
      this.dataSource.filter = filterValue.trim().toLowerCase();

      if (this.dataSource.paginator) {
        this.dataSource.paginator.firstPage();
      }
    }
}