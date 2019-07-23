export class Order {
    order_id: number;
    owner:string;
    order_name:string;
    description:string;
    photo:string;
    spicy_level:string;
    vegetarian:string;
    cooking_time:string;
    is_active:number;
    types:any[];

    static fromJson(json){ return Object.assign(Order.placeholder(), json); }
    static placeholder(){ return new Order(); }
}