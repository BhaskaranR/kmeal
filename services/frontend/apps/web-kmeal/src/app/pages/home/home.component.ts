import { Component, ElementRef, ViewChild , OnInit} from "@angular/core";
import { NguCarouselConfig } from "@ngu/carousel";
import {Apollo} from 'apollo-angular';
import { Router } from "@angular/router";
import {MatSnackBar} from '@angular/material';
import {  imagesMapping } from "../../features/shared/utils/utils";
import { DataService } from "../../core/data.service";


@Component({
    selector: "app-home",
    moduleId: module.id,
    templateUrl: "./home.html",
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{

    constructor(
        public router:Router,
        public snackBar: MatSnackBar,
        public dataService: DataService) {}

    cuisines:string[] = [];
    cuisineConfig: NguCarouselConfig = {
        grid: { xs: 2, sm: 2, md: 4, lg: 6, all: 0 },
        speed: 250,
        point: {
            visible: false
        },
        touch: true,
        loop: true,
        animation: 'lazy'
    };

    dishes:Array<any>;
    restaurants:Array<any>;
    carConfig:NguCarouselConfig = {
      grid: { xs: 1, sm: 2, md: 3, lg: 4, all: 0 },
      speed: 250,
      point: {
          visible: false
      },
      touch: true,
      loop: false,
      animation: 'lazy'
    };

    isReady:boolean = false;

    ngOnInit(){
        this.loadData();
    }

    private async loadData(){
        await this.dataService.searchRestaurants(40.7, 74.0, 10);
        await this.dataService.getCuisines();
        this.isReady = true;
    }

    ngOnDestroy() {console.log('home page destroyed')}


    onSearch(type, cuisine){
      this.router.navigate(['./search'],{ queryParams: { type: type, value:cuisine } });
    }

    throwError(msg){
        this.snackBar.open(msg,'',{
            duration: 2000,
        });
    }

    navigate(e){
        this.router.navigate([e.url],{queryParams:{value:e.id}});
    }

    getCuisineImg(cuisine){
        return imagesMapping[cuisine['title'].toLowerCase()] || imagesMapping['indian'];
    }
}