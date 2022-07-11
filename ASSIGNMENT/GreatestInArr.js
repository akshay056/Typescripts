var GreatestNo = /** @class */ (function () {
    function GreatestNo(array) {
        this.arr = [];
        this.arr = array;
    }
    GreatestNo.prototype.Greatest = function () {
        var temp = this.arr[0];
        this.arr.forEach(function (element) {
            if (element > temp) {
                temp = element;
            }
        });
        return temp + "  is greatest";
    };
    return GreatestNo;
}());
var arr = [25, 36, 45, 8];
var ga = new GreatestNo(arr);
console.log(ga.Greatest());
