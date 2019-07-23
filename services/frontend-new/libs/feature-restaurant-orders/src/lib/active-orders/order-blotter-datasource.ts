import { DataSource } from "@angular/cdk/collections";
import { MatPaginator, MatSort } from "@angular/material";
import { map } from "rxjs/operators";
import { Observable, of as observableOf, merge } from "rxjs";

// TODO: Replace this with your own data model type
export interface OrderBlotterItem {
  name: string;
  id: number;
  status:string;
}

// TODO: replace this with real data from your application
const EXAMPLE_DATA: OrderBlotterItem[] = [
  { id: 1, name: "Order" ,status:'Requested'},
  { id: 2, name: "Order 2 ",status:'Requested' },
  { id: 3, name: "Order 3",status:'Requested' },
  { id: 4, name: "Beryllium",status:'Requested' },
  { id: 5, name: "Boron" ,status:'Requested'},
  { id: 6, name: "Carbon" ,status:'Requested'},
  { id: 7, name: "Nitrogen",status:'Requested' },
  { id: 8, name: "Oxygen",status:'Requested' },
  { id: 9, name: "Fluorine" ,status:'Requested'},
  { id: 10, name: "Neon",status:'Requested' },
  { id: 11, name: "Sodium" ,status:'Requested'},
  { id: 12, name: "Magnesium" ,status:'Requested'},
  { id: 13, name: "Aluminum" ,status:'Requested'},
  { id: 14, name: "Silicon" ,status:'Requested'},
  { id: 15, name: "Phosphorus" ,status:'Requested'},
  { id: 16, name: "Sulfur",status:'Requested' },
  { id: 17, name: "Chlorine",status:'Requested' },
  { id: 18, name: "Argon",status:'Requested' },
  { id: 19, name: "Potassium",status:'Requested' },
  { id: 20, name: "Calcium",status:'Requested' }
];

/**
 * Data source for the OrderBlotter view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class OrderBlotterDataSource extends DataSource<OrderBlotterItem> {
  data: OrderBlotterItem[] = EXAMPLE_DATA;

  constructor(private paginator: MatPaginator, private sort: MatSort) {
    super();
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<OrderBlotterItem[]> {
    // Combine everything that affects the rendered data into one update
    // stream for the data-table to consume.
    const dataMutations = [observableOf(this.data), this.paginator.page, this.sort.sortChange];

    // Set the paginator's length
    this.paginator.length = this.data.length;

    return merge(...dataMutations).pipe(
      map(() => {
        return this.getPagedData(this.getSortedData([...this.data]));
      })
    );
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect() {}

  /**
   * Paginate the data (client-side). If you're using server-side pagination,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getPagedData(data: OrderBlotterItem[]) {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    return data.splice(startIndex, this.paginator.pageSize);
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: OrderBlotterItem[]) {
    if (!this.sort.active || this.sort.direction === "") {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort.direction === "asc";
      switch (this.sort.active) {
        case "name":
          return compare(a.name, b.name, isAsc);
        case "id":
          return compare(+a.id, +b.id, isAsc);
        default:
          return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a, b, isAsc) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
