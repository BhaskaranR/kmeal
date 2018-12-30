import { Component ,ChangeDetectionStrategy, Input, EventEmitter, Output} from '@angular/core';


@Component({
  selector: 'shopping-cart',
  moduleId: module.id,
  templateUrl:'./shopping-cart.component.html' ,
  styleUrls:['./shopping-cart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShoppingCartComponent  {
    @Input() public dishDetails:any;
    @Output() public goToDishEvent = new EventEmitter<any>();
    @Output() public onError = new EventEmitter<string>();

    constructor(){}

    goToDish(){
        this.goToDishEvent.emit('dish');
    }
} 