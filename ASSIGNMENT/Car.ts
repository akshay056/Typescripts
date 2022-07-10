class Car 
{

    speed:number;
    regularPrice:number;
    color:string;

    constructor(carspeed:number,carregularPrice:number, carcolor:string) {
        this.speed = carspeed;
        this.regularPrice = carregularPrice;
        this.color = carcolor;
    }

    public getSalePrice()
    {
        return this.regularPrice;
    }
}
class truck extends Car 
{
    weight:number;

    constructor(truckspeed:number, truckregularPrice:number, truckcolor:string, truckweight:number) 
    {
        super(truckspeed, truckregularPrice, truckcolor);
        this.weight = truckweight;
    }

    getSalesPrice()
    {
        return super.getSalePrice() * (this.weight > 2000 ? 0.9 : 0.8);
    }
}
var c=new Car(200,200000,"blue")
console.log(c.getSalePrice)
var t=new truck(100,500000,"black",2500);
console.log("The weight of car is :"+ t.getSalesPrice);
