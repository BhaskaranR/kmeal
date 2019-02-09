import { Injectable } from "@angular/core";
import { ScatterService } from "@kmeal-nx/scatter";

@Injectable()
export class AccountService {
    constructor( public scatterService: ScatterService) {
            
    }
}