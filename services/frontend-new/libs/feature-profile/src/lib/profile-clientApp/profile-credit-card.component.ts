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
        private scatterService: ScatterService){}

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
            console.log(this.myFg.get('sendTo').value, this.myFg.get('amount').value, this.myFg.get('memo').value);
            const acctInfo = this.checkLogin();
            if (!acctInfo) throw new Error('login first');

            const contract = this.scatterService.getContract();
            console.log('acct info and contract ', acctInfo);
            console.log('contract : ', contract);
            console.log('EOS : ', this.scatterService.eos);
            const from  = acctInfo.account.name, 
                  to = this.myFg.get('sendTo').value, 
                  amount = this.myFg.get('amount').value + ' KMEAL', 
                  memo = this.myFg.get('memo').value;
            console.log('transfering : ', from, to, amount, memo);
            const currency = await this.scatterService.eos.transfer(from, to, amount, memo);
            console.log('result : ', currency);
        }
        catch(e){
            throw new Error(e);
        }
    }

    private checkLogin() {
        if (!this.scatterService.getScatter().identity) {
            throw new Error('Please log in with Scatter first.');
        }
        const account = this.scatterService.getScatter().identity.accounts[0];
        const opts = { authorization: `${account.name}@${account.authority}` };
        return {
            account: account,
            opts: opts
        }
    }
}