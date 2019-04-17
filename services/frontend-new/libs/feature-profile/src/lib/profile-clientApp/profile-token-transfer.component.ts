import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { ScatterService , eos, contract} from '@kmeal-nx/scatter';

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
        this.scatterService.setEos();
        this.scatterService.setEos();
        const contract = this.scatterService.getContract();
        const EOS = this.scatterService.getScatter().eos;
        console.log('contract : ', contract);
        console.log('eos : ', EOS);

        const prom = new Promise<any>((res, rej) => {

            res( 
                contract.transaction(
                    ['kmealcoinio1','kmeal'], 
                    contracts => { console.log(contracts, 'contracts'); contracts['kmealcoinio1'].transfer('321w21','321yisw',1,'testing')}
                ).then((data)=>{console.log('result ? ', data)})
            )
        })

        prom.then((res) => {
            console.log(res);
        })
    }
}