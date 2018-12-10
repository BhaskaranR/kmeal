import { NgModule } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

// libs
import { environment } from '@kmeal-frontend/core';

// app
import { AppComponent } from './app.component';
import { routing } from './app-routing.module';
import { SharedModule } from './features/shared/shared.module';


@NgModule({
  imports: [
    routing,
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  providers: [
    {
        provide: APP_BASE_HREF,
        useValue: '/'
    },
    {
        provide: 'apiBase',
        useValue: environment.api_url
    }
  ]
})
export class AppModule {}
