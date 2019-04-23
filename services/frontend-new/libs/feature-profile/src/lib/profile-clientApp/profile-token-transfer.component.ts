import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { ScatterUIService } from '@kmeal-nx/scatter';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
    selector: 'kmeal-nx-profile-token-transfer',
    moduleId: module.id,
    templateUrl: './profile-token-transfer.component.html'
})
export class ProfileTokenTransferComponent implements OnInit {

    transferTokenForm:FormGroup;
    
    constructor(
        public scatterUIService:ScatterUIService,
        public fb: FormBuilder){}

    ngOnInit(){
      this.transferTokenForm = this.fb.group({
          coinType:['',[Validators.required]],
          sendTo:[null, [Validators.required]],
          amount:[null, [Validators.required]],
          memo:null,
      });
    }

    async onSubmit(){


      const result = await this.scatterUIService.signTransaction({
            actions: [{
              account: 'eosio.token',
              name: 'transfer',
              authorization: [{
                actor: 'kmealadmin15',
                permission: 'active',
              }],
              data: {
                from:'kmealadmin15',
                to: 'kmealtestio1',
                quantity: '0.0001 kmealcoin',
                memo: '',
              },
            }]
          }, {
            blocksBehind: 3,
            expireSeconds: 30,
          })

          console.log('transafer? ', result);
    }

    
}