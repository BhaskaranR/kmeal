import { Component, ElementRef, ViewChild , OnInit} from "@angular/core";
import { NguCarouselConfig } from "@ngu/carousel";
import {Apollo} from 'apollo-angular';
import gql from 'graphql-tag';


@Component({
    selector: "app-home",
    moduleId: module.id,
    templateUrl: "./home.html",
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
    constructor(private apollo: Apollo) {}
    cuisines:string[] = ['Indian', 'Chinese','Korean','American','Brunch','Pizza','Breakfast','Jpanese','Burger','Mexican','South American','Sea Food','Caribbean'];
    public carouselTileConfig: NguCarouselConfig = {
        grid: { xs: 3, sm: 3, md: 6, lg: 6, all: 0 },
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
      .watchQuery({
        query: gql`
          {
            restaurant{
              name
            }
          }
        `,
      })
      .valueChanges.subscribe(result => {
        console.log(result);
      });
    }
}