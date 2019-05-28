import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
    selector: 'kmeal-nx-profile-token-transfer',
    moduleId: module.id,
    templateUrl: './profile-token-transfer.component.html'
})
export class ProfileTokenTransferComponent implements OnInit{

  myFg:FormGroup;
  constructor(
      public fb:FormBuilder,){}

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