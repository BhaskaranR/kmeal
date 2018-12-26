import { Component } from '@angular/core';

// libs
import { BaseComponent } from '@kmeal-frontend/core';
import { AppService } from '@kmeal-frontend/nativescript/core';

export abstract class AppBaseComponent extends BaseComponent {
  constructor(protected appService: AppService) {
    super();
  }
}
