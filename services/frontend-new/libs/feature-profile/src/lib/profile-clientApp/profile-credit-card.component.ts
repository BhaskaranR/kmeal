import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { ScatterService } from '@kmeal-nx/scatter';

@Component({
    selector: 'kmeal-nx-profile-client-credit-card',
    moduleId: module.id,
    templateUrl: './profile-credit-card.component.html'
})
export class ProfileCreditCardComponent implements OnInit{
    myFg:FormGroup;
    constructor(
        public fb:FormBuilder,
        public scatterService:ScatterService){}

    ngOnInit(){
        this.myFg = this.fb.group({
            token:[{value:'KMEAL',disabled:true},[Validators.required]],
            sendTo:['',[Validators.required]],
            amount:['', [Validators.required, Validators.pattern("^[0-9]*$")]],
            memo:['', [Validators.required]],
        });
    }

    async onSubmit(){

        try{
          const contract = await this.scatterService.eos.transaction('kmealadmin15', async (contract) => {
              console.log('kmealadmin15 contract', contract);

              const call = await this.scatterService.eos.transfer(this.scatterService.code,'kmealadminio','1 KMEAL','test');
              console.log('called ? ', call);
          });

        }
        catch(e){
            console.log('what error ?!', e );
        }
    }

}