import { AccountService } from '../services/account.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { OnInit, Component } from '@angular/core';

@Component({
    selector: 'kmeal-nx-profile-client-credit-card',
    moduleId: module.id,
    templateUrl: './profile-credit-card.component.html'
})
export class ProfileCreditCardComponent implements OnInit {
    myFg: FormGroup;
    constructor(
        public fb: FormBuilder,
        public accountService: AccountService) { }

    ngOnInit() {
        this.myFg = this.fb.group({
            token: [{ value: 'KMEAL', disabled: true }, [Validators.required]],
            sendTo: ['', [Validators.required]],
            amount: ['', [Validators.required, Validators.pattern("^[0-9]*$")]],
            memo: ['', [Validators.required]],
        });
    }

    async onSubmit() {
        try {
            if (!this.myFg.valid) { return false;}

            const val = await this.accountService.transfer(this.myFg.get('sendTo').value, this.myFg.get('amount').value +' KMEAL', this.myFg.get('memo').value);
            console.log(val);
        }
        catch (e) {
            console.log('what error ?!', e);
        }
    }
}