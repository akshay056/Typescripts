var product = /** @class */ (function () {
    function product(id, name, p) {
        this.pid = 10;
        this.pname = 'sonata';
        this.price = 345;
        this.pid = id;
        this.pname = name;
        this.price = p;
    }
    product.prototype.display = function () {
        console.log(this.pid);
        console.log(this.pname);
        console.log(this.price);
    };
    return product;
}());
var p = new product(123, 'mobile', 10000);
p.display();
