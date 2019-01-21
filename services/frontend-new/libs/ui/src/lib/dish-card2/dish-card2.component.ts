import {
    Component,
    ChangeDetectionStrategy,
    Input,
    EventEmitter,
    Output
  } from '@angular/core';

  @Component({
    selector: 'dish-card2',
    moduleId: module.id,
    templateUrl: './dish-card2.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
  })
  export class DishCardTwoComponent {
      @Input() data:any;
      @Output() onClickEvent = new EventEmitter<any>();
      constructor(){}
  }