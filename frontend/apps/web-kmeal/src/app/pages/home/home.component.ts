import { Component, ElementRef, ViewChild } from "@angular/core";
import { NguCarouselConfig } from "@ngu/carousel";


@Component({
    selector: "app-home",
    moduleId: module.id,
    templateUrl: "./home.html",
    styleUrls: ['./home.component.scss']
})
export class HomeComponent {
    constructor(){}
    isLoggedIn:boolean = true;
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
}