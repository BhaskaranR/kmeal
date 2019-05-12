import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { ScatterUIService } from '@kmeal-nx/scatter';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
    selector: 'kmeal-nx-profile-token-transfer',
    moduleId: module.id,
    templateUrl: './profile-token-transfer.component.html'
})
export class ProfileTokenTransferComponent{

  myFg:FormGroup;
  constructor(
      public fb:FormBuilder,
      public scatterUIService:ScatterUIService){}

  ngOnInit(){
      this.myFg = this.fb.group({
          token:['KMEAL',[Validators.required]],
          sendTo:['',[Validators.required]],
          amount:['', [Validators.required, Validators.pattern("^[0-9]*$")]],
          memo:['', [Validators.required]],
      });
  }

  onSubmit(){

  }
    
}