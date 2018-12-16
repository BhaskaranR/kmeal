import { Component ,ChangeDetectionStrategy, Input, EventEmitter, Output} from '@angular/core';
import { Router } from '@angular/router';
import { NguCarouselConfig } from '@ngu/carousel';

@Component({
  selector: 'dish-card',
  moduleId: module.id,
  templateUrl:'./dish-card.component.html' ,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DishCardComponent  {
    @Input() public dishDetails:any;
    @Output() public goToDish = new EventEmitter<any>();
    constructor(){}
}