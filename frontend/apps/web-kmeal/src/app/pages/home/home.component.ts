import { Component, ElementRef, ViewChild , OnInit} from "@angular/core";
import { NguCarouselConfig } from "@ngu/carousel";
import {Apollo} from 'apollo-angular';
import { categoriesQuery } from "./home.queries";



@Component({
    selector: "app-home",
    moduleId: module.id,
    templateUrl: "./home.html",
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{

    constructor(private apollo: Apollo) {}
    cuisines:string[] = [];
    public carouselTileConfig: NguCarouselConfig = {
        grid: { xs: 2, sm: 2, md: 4, lg: 6, all: 0 },
        speed: 250,
        point: {
            visible: false
        },
        touch: true,
        loop: true,
        animation: 'lazy'
    };

    ngOnInit(){
      this.apollo
      .watchQuery({query: categoriesQuery})
      .valueChanges.subscribe(result => {
        this.cuisines = result.data['kmeal_categories'].map(ca => ca['title']);
      });
    }
}