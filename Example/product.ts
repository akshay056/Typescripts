class product
{
    pid:number=10;
    pname:string='sonata';
    price:number=345;

    constructor (id:number,name:string,p:number)
    {
        this.pid=id;
    this.pname=name;
    this.price=p;
}
display()
{
    console.log(this.pid);
    console.log(this.pname);
    console.log(this.price);

}
}
var p= new product(123,'mobile',10000);
p.display();