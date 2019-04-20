import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { ScatterService , eos, contract} from '@kmeal-nx/scatter';
import {ual, scatter} from '../../../../scatter/src/lib/services/ual-render';
@Component({
    selector: 'kmeal-nx-profile-token-transfer',
    moduleId: module.id,
    templateUrl: './profile-token-transfer.component.html'
})
export class ProfileTokenTransferComponent implements OnInit {
    constructor(public scatterService:ScatterService){}
    ngOnInit(){}
    async onSubmit(){
        alert('submitting transfer');
        console.log("scatter service : ",this.scatterService);
        const contract = this.scatterService.getContract();
        
        console.log('contract : ', contract);
        
        console.log('scatter : ', scatter);
        //console.log('eos : ', e);

        //const trx = await e.transfer(this.scatterService.scatter.identity.accounts[0].name,'helloworld','1.0000 EOS',{});
        //console.log(`Transaction ID: ${trx.transaction_id}`);
    }
}