import { Component ,ChangeDetectionStrategy, Input, EventEmitter, Output} from '@angular/core';


@Component({
  selector: 'dish-card',
  moduleId: module.id,
  templateUrl:'./dish-card.component.html' ,
  styleUrls:['./dish.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DishCardComponent  {
    @Input() public dishDetails:any;
    @Output() public goToDishEvent = new EventEmitter<any>();
    @Output() public onError = new EventEmitter<string>();

    constructor(){}

    goToDish(){
        this.goToDishEvent.emit(this.dishDetails);
    }

    goToRestaurant
}