import { NgModule } from '@angular/core';

// libs
import { environment } from '@kmeal-frontend/core';

// app
import { CoreModule } from './core/core.module';
import { SharedModule } from './features/shared/shared.module';

import { AppComponent } from './app.component';
import { routing } from './app-routing.module';

@NgModule({
  imports: [CoreModule, SharedModule, routing],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
