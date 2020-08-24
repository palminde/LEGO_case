export default class Item {
    id: number;
    title: string;
    img: string;
    qty: number;
    price: number;

    constructor(id: number, title: string, img: string, qty: number, price: number){
        this.id = id;
        this.title = title;
        this.img = img;
        this.qty = qty;
        this.price = price; 
    }
}
