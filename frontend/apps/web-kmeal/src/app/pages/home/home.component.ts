import { Component, ElementRef, ViewChild , OnInit} from "@angular/core";
import { NguCarouselConfig } from "@ngu/carousel";
import {Apollo} from 'apollo-angular';
import { categoriesQuery } from "./home.queries";
import { Router } from "@angular/router";
import {MatSnackBar} from '@angular/material';


@Component({
    selector: "app-home",
    moduleId: module.id,
    templateUrl: "./home.html",
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{

    constructor(
        public apollo: Apollo,
        public router:Router,
        public snackBar: MatSnackBar) {}
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

    public dishes:Array<any> = [
      {
          id:'321hdjsha',
          name:'Chicken Biryani',
          description:"Sautted Chicken with Fried rice, with special Indian Spcies",
          lables:['Indian','Spicy','Chicken','Rice'],
          restaurant:'Indian Diner',
          currentPrice:13.88,
          orignalprice:16.00,
          ordersCount:12,
          maxOrders:30,
          rating:5,
          expireTime:"02:00:00"
      },{
          id:'4372djakhx',
          name:'Chicken Curry',
          description:"Grilled Chicken in creamy curry sauce, served with choice of white rice or brown rice",
          lables:['Indian','Spicy','Chicken','Rice','curry'],
          restaurant:'Indian Diner',
          currentPrice:13.88,
          orignalprice:16.00,
          ordersCount:12,
          maxOrders:30,
          rating:5,
          expireTime:"02:00:00"
      },{
          id:'4372djakhx',
          name:'Chicken Curry',
          description:"Grilled Chicken in creamy curry sauce, served with choice of white rice or brown rice",
          lables:['Indian','Spicy','Chicken','Rice','curry'],
          restaurant:'Indian Diner',
          currentPrice:13.88,
          orignalprice:16.00,
          ordersCount:12,
          maxOrders:30,
          rating:5,
          expireTime:"02:00:00"
      },{
          id:'4372djakhx',
          name:'Chicken Curry',
          description:"Grilled Chicken in creamy curry sauce, served with choice of white rice or brown rice",
          lables:['Indian','Spicy','Chicken','Rice','curry'],
          restaurant:'Indian Diner',
          currentPrice:13.88,
          orignalprice:16.00,
          ordersCount:12,
          maxOrders:30,
          rating:5,
          expireTime:"02:00:00"
      },{
          id:'4372djakhx',
          name:'Chicken Curry',
          description:"Grilled Chicken in creamy curry sauce, served with choice of white rice or brown rice",
          lables:['Indian','Spicy','Chicken','Rice','curry'],
          restaurant:'Indian Diner',
          currentPrice:13.88,
          orignalprice:16.00,
          ordersCount:12,
          maxOrders:30,
          rating:5,
          expireTime:"02:00:00"
      },{
          id:'4372djakhx',
          name:'Chicken Curry',
          description:"Grilled Chicken in creamy curry sauce, served with choice of white rice or brown rice",
          lables:['Indian','Spicy','Chicken','Rice','curry'],
          restaurant:'Indian Diner',
          currentPrice:13.88,
          orignalprice:16.00,
          ordersCount:12,
          maxOrders:30,
          rating:5,
          expireTime:"02:00:00"
      },{
          id:'4372djakhx',
          name:'Chicken Curry',
          description:"Grilled Chicken in creamy curry sauce, served with choice of white rice or brown rice",
          lables:['Indian','Spicy','Chicken','Rice','curry'],
          restaurant:'Indian Diner',
          currentPrice:13.88,
          orignalprice:16.00,
          ordersCount:12,
          maxOrders:30,
          rating:5,
          expireTime:"02:00:00"
      },{
          id:'4372djakhx',
          name:'Chicken Curry',
          description:"Grilled Chicken in creamy curry sauce, served with choice of white rice or brown rice",
          lables:['Indian','Spicy','Chicken','Rice','curry'],
          restaurant:'Indian Diner',
          currentPrice:13.88,
          orignalprice:16.00,
          ordersCount:12,
          maxOrders:30,
          rating:5,
          expireTime:"02:00:00"
      }
  ];

    public restaurants:Array<any> = [
    {
        id:"hudsan321",
        restaurantName:'Indian Dinner',
        description:'Authentic Indian Cuisine. Lunch and Dinner',
        type:'Indian',
        address:{
            line:'19523 25th Ave',
            city:'Queens',
            state:'NY',
            zipcode:11453,
        },
        location:{
            long:198,
            lat:21,
        },
        distance:'198ft',
        lables:['Indian','Spicy', 'Takeout', 'Lunch','Dinner'],
        rating:5,
        priceLevel:'$$',
    },{
        id:"hudsan321",
        restaurantName:'Indian Dinner',
        description:'Authentic Indian Cuisine. Lunch and Dinner',
        type:'Indian',
        address:{
            line:'19523 25th Ave',
            city:'Queens',
            state:'NY',
            zipcode:11453,
        },
        location:{
            long:198,
            lat:21,
        },
        distance:'198ft',
        lables:['Indian','Spicy', 'Takeout', 'Lunch','Dinner'],
        rating:5,
        priceLevel:'$$',
    },{
        id:"hudsan321",
        restaurantName:'Indian Dinner',
        description:'Authentic Indian Cuisine. Lunch and Dinner',
        type:'Indian',
        address:{
            line:'19523 25th Ave',
            city:'Queens',
            state:'NY',
            zipcode:11453,
        },
        location:{
            long:198,
            lat:21,
        },
        distance:'198ft',
        lables:['Indian','Spicy', 'Takeout', 'Lunch','Dinner'],
        rating:5,
        priceLevel:'$$',
    },{
        id:"hudsan321",
        restaurantName:'Indian Dinner',
        description:'Authentic Indian Cuisine. Lunch and Dinner',
        type:'Indian',
        address:{
            line:'19523 25th Ave',
            city:'Queens',
            state:'NY',
            zipcode:11453,
        },
        location:{
            long:198,
            lat:21,
        },
        distance:'198ft',
        lables:['Indian','Spicy', 'Takeout', 'Lunch','Dinner'],
        rating:5,
        priceLevel:'$$',
    },{
        id:"hudsan321",
        restaurantName:'Indian Dinner',
        description:'Authentic Indian Cuisine. Lunch and Dinner',
        type:'Indian',
        address:{
            line:'19523 25th Ave',
            city:'Queens',
            state:'NY',
            zipcode:11453,
        },
        location:{
            long:198,
            lat:21,
        },
        distance:'198ft',
        lables:['Indian','Spicy', 'Takeout', 'Lunch','Dinner'],
        rating:5,
        priceLevel:'$$',
    },{
        id:"hudsan321",
        restaurantName:'Indian Dinner',
        description:'Authentic Indian Cuisine. Lunch and Dinner',
        type:'Indian',
        address:{
            line:'19523 25th Ave',
            city:'Queens',
            state:'NY',
            zipcode:11453,
        },
        location:{
            long:198,
            lat:21,
        },
        distance:'198ft',
        lables:['Indian','Spicy', 'Takeout', 'Lunch','Dinner'],
        rating:5,
        priceLevel:'$$',
    },{
        id:"hudsan321",
        restaurantName:'Indian Dinner',
        description:'Authentic Indian Cuisine. Lunch and Dinner',
        type:'Indian',
        address:{
            line:'19523 25th Ave',
            city:'Queens',
            state:'NY',
            zipcode:11453,
        },
        location:{
            long:198,
            lat:21,
        },
        distance:'198ft',
        lables:['Indian','Spicy', 'Takeout', 'Lunch','Dinner'],
        rating:5,
        priceLevel:'$$',
    },{
        id:"hudsan321",
        restaurantName:'Indian Dinner',
        description:'Authentic Indian Cuisine. Lunch and Dinner',
        type:'Indian',
        address:{
            line:'19523 25th Ave',
            city:'Queens',
            state:'NY',
            zipcode:11453,
        },
        location:{
            long:198,
            lat:21,
        },
        distance:'198ft',
        lables:['Indian','Spicy', 'Takeout', 'Lunch','Dinner'],
        rating:5,
        priceLevel:'$$',
    },{
        id:"hudsan321",
        restaurantName:'Indian Dinner',
        description:'Authentic Indian Cuisine. Lunch and Dinner',
        type:'Indian',
        address:{
            line:'19523 25th Ave',
            city:'Queens',
            state:'NY',
            zipcode:11453,
        },
        location:{
            long:198,
            lat:21,
        },
        distance:'198ft',
        lables:['Indian','Spicy', 'Takeout', 'Lunch','Dinner'],
        rating:5,
        priceLevel:'$$',
    },{
        id:"hudsan321",
        restaurantName:'Indian Dinner',
        description:'Authentic Indian Cuisine. Lunch and Dinner',
        type:'Indian',
        address:{
            line:'19523 25th Ave',
            city:'Queens',
            state:'NY',
            zipcode:11453,
        },
        location:{
            long:198,
            lat:21,
        },
        distance:'198ft',
        lables:['Indian','Spicy', 'Takeout', 'Lunch','Dinner'],
        rating:5,
        priceLevel:'$$',
    }
]

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
    ngOnInit(){
      this.apollo
      .watchQuery({query: categoriesQuery})
      .valueChanges.subscribe(result => {
        this.cuisines = result.data['kmeal_categories'].map(ca => ca['title']);
      });
    }

    onSearch(type, cuisine){
      console.log(type, cuisine);
      this.router.navigate(['./search'],{ queryParams: { type: type, value:cuisine } });
    }

    throwError(msg){
        this.snackBar.open(msg,'',{
            duration: 2000,
          });
    }
}