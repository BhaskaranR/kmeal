import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';


@Injectable()
export class UserProfileService {

    username:string = "xzeng";
 
    constructor(public apollo: Apollo) {console.warn('Service created!') }

}