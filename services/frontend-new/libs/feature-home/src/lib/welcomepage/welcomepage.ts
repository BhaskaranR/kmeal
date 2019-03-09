import {Component, Output, OnInit, EventEmitter} from '@angular/core';


@Component({
  selector: 'kmeal-nx-welcomepage',
  templateUrl: './welcomepage.html',
  styleUrls: ['./welcomepage.scss']
})
export class Welcomepage implements OnInit {
  // isNextVersion = location.hostname.startsWith('next.material.angular.io');
  @Output() public onAddressChangeEvent = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {
  }

  onAddressChange(evt){
    this.onAddressChangeEvent.emit(evt);
  }
}
