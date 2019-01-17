import {
  Component,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter
} from '@angular/core';

@Component({
  selector: 'res-card',
  moduleId: module.id,
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RestaurantComponent {
  @Input() public res: any;
  @Output() public onRestaurantDetailsEvent = new EventEmitter<any>();
  @Output() public onErrorEvent = new EventEmitter<string>();

  constructor() {}
  onRestaurantDetails(e) {
    this.onRestaurantDetailsEvent.emit(e);
  }

  generateLables(description) {
    let result = '';
    description.split(',').forEach(la => {
      result += la + ' , ';
    });
    return result;
  }

  onError(e){
    this.onErrorEvent.emit(e);
  }
}
