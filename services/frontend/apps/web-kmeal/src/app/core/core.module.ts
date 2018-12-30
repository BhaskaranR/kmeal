import { NgModule } from '@angular/core';

// xplat
import { FooCoreModule } from '@kmeal-frontend/web';
import { DataService } from './data.service';

@NgModule({
  imports: [FooCoreModule],
  providers:[DataService]
})
export class CoreModule {}
