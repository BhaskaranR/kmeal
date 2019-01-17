import {Component, NgModule, OnInit} from '@angular/core';
import {MatButtonModule} from '@angular/material';
import {RouterModule} from '@angular/router';

@Component({
  selector: 'kmeal-nx-welcomepage',
  templateUrl: './welcomepage.html',
  styleUrls: ['./welcomepage.scss']
})
export class Welcomepage implements OnInit {
  // isNextVersion = location.hostname.startsWith('next.material.angular.io');

  constructor() {}

  ngOnInit(): void {
  }
}
