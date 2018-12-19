import { Component , OnInit} from '@angular/core';

// xplat
import { AppBaseComponent } from '@kmeal-frontend/web';

import ScatterJS from 'scatterjs-core';
import ScatterEOS from 'scatterjs-plugin-eosjs'

@Component({
  selector: 'app-root',
  template: `
  <router-outlet></router-outlet>`
})
export class AppComponent extends AppBaseComponent implements OnInit{
  constructor() {
    super();
  }

  scatter:any;
  ngOnInit(){
    
  this.scatter = ScatterJS.plugins( new ScatterEOS() );
  const connectionOptions = {initTimeout:10000}

  ScatterJS.scatter.connect("KMEAL", connectionOptions).then(connected => {
      if(!connected) {
          // User does not have Scatter installed/unlocked.
          return false;
      }
      
      // Use `scatter` normally now.
      ScatterJS.scatter.getIdentity('Shaun');
  });
  }

}
