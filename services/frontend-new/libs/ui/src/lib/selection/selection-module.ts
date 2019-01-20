import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CdkSelection } from './selection';
import { CdkSelectionToggle } from './selection-toggle';

@NgModule({
  imports: [CommonModule],
  declarations: [CdkSelection, CdkSelectionToggle],
  exports: [CdkSelection, CdkSelectionToggle]
})
export class CdkSelectionModule {}
