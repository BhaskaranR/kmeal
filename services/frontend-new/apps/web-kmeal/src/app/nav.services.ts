import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class NavService {
    private addrChangeSub : Subject<string>;

    constructor() {
        this.addrChangeSub = new Subject<string>();
    }

    onAddressChange(addr: string): void {
        this.addrChangeSub.next(addr);
    }

    getAddrChangeSub(): Observable<string> {
        return this.addrChangeSub;
    }
}