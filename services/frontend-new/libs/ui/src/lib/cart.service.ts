import { Injectable } from "@angular/core";
import {LocalStorage} from '@ngx-pwa/local-storage';

interface User {
    restaurant:{[key:string]:any};
    orders:Array<any>;
    address?:string;
}

@Injectable({
  providedIn: "root"
})
export class CartService {
  constructor(public localStorage: LocalStorage){
      this.localStorage.getItem('user').subscribe((user:User)=>{
          if (!user) {
              this.user = {
                  restaurant:null,
                  orders:[],
              }
          } else {
              this.user = user;
          }
          console.log('constructed cart service class!');
      })   
  }

  restaurantId:string;
  restaurantInfo:{[key:string]:any};
  user:User;

  resetData(){
      this.user = {
          restaurant:null,
          orders:[]
      }

      this.saveChanges();
  }

  addOrder(order, restaurantInfo){
    if (!this.user.restaurant ){
        this.user.restaurant = restaurantInfo;
        this.user.orders.push(order);
        this.saveChanges();
        return true;
    } 

    if (this.user.restaurant.restaurant_id !== restaurantInfo.restaurant_id) return false;
    else {
        this.user.orders.push(order);
        this.saveChanges();
        return true;
    }

  }

  hasOrders(){
      return !!this.user.restaurant && this.user.orders.length != 0;
  }

  removeOrder(idx){
      this.user.orders =  this.user.orders.splice(idx, 1);
      this.saveChanges();
  }

  getOrdersCount() {
      return this.user ? this.user.orders.length : 0;
  }

  async getOrders(): Promise<any>{
      return new Promise((res, rej)=> {
        this.localStorage.getItem('user').subscribe((user:User) => {
            res(user.orders);
        })
      })
  }

  private saveChanges(){
      this.localStorage.setItem('user', this.user).subscribe(console.log);
  }

  updateOrders(orders){
      this.user.orders = orders;
      this.saveChanges();
  }
}