var should = chai.should();

describe("测试freeBaggages函数", function()
{
    it("1", function()
    {
        var passager = new Passenger();
        passager.pType=0;
        passager.vip=0;
        passager.cabin=NaN;
        passager.airLine=0;
        var result = freeBaggages(passager);
        should.equal(result.length, 1);
        should.equal(result[0].special, 11);
        should.equal(result[0].size, 200);
        should.equal(result[0].weight, 0);
    });
    it("2", function()
    {
        var passager = new Passenger();
        passager.pType=0;
        passager.vip=NaN;
        passager.cabin=2;
        passager.airLine=0;
        var result = freeBaggages(passager);
        should.equal(result.length, 2);
        should.equal(result[0].special, 11);
        should.equal(result[0].size, 200);
        should.equal(result[0].weight, 20);
    });
    it("3", function()
    {
        var passager = new Passenger();
        passager.pType=0;
        passager.vip=2;
        passager.cabin=2;
        passager.airLine=0;
        var result = freeBaggages(passager);
        should.equal(result.length, 2);
        should.equal(result[0].special, 11);
        should.equal(result[0].size, 200);
        should.equal(result[0].weight, 20);
    });
    it("4", function()
    {
        var passager = new Passenger();
        passager.pType=0;
        passager.vip=1;
        passager.cabin=3;
        passager.airLine=0;
        var result = freeBaggages(passager);
        should.equal(result.length, 2);
        should.equal(result[0].special, 11);
        should.equal(result[0].size, 200);
        should.equal(result[0].weight, 20);
    });
    it("5", function()
    {
        var passager = new Passenger();
        passager.pType=0;
        passager.vip=0;
        passager.cabin=2;
        passager.airLine=0;
        var result = freeBaggages(passager);
        should.equal(result.length, 1);
        should.equal(result[0].special, 11);
        should.equal(result[0].size, 200);
        should.equal(result[0].weight, 20);
    });
    it("6", function()
    {
        var passager = new Passenger();
        passager.pType=0;
        passager.vip=0;
        passager.cabin=1;
        passager.airLine=0;
        var result = freeBaggages(passager);
        should.equal(result.length, 1);
        should.equal(result[0].special, 11);
        should.equal(result[0].size, 200);
        should.equal(result[0].weight, 30);
    });
    it("7", function()
    {
        var passager = new Passenger();
        passager.pType=0;
        passager.vip=0;
        passager.cabin=0;
        passager.airLine=0;
        var result = freeBaggages(passager);
        should.equal(result.length, 1);
        should.equal(result[0].special, 11);
        should.equal(result[0].size, 200);
        should.equal(result[0].weight, 40);
    });
    it("8", function()
    {
        var passager = new Passenger();
        passager.pType=1;
        passager.vip=0;
        passager.cabin=0;
        passager.airLine=0;
        var result = freeBaggages(passager);
        should.equal(result.length, 2);
        should.equal(result[0].special, 3);
        should.equal(result[0].size, 200);
        should.equal(result[0].weight, 0);
    });
    it("9", function()
    {
        var passager = new Passenger();
        passager.pType=1;
        passager.vip=0;
        passager.cabin=NaN;
        passager.airLine=1;
        var result = freeBaggages(passager);
        should.equal(result.length, 2);
        should.equal(result[0].special, 11);
        should.equal(result[0].size, 158);
        should.equal(result[0].weight, 23);
    });
    it("10", function()
    {
        var passager = new Passenger();
        passager.pType=1;
        passager.vip=1;
        passager.cabin=3;
        passager.airLine=5;
        var result = freeBaggages(passager);
        should.equal(result.length, 2);
        should.equal(result[0].special, 11);
        should.equal(result[0].size, 158);
        should.equal(result[0].weight, 23);
    });
    it("11", function()
    {
        var passager = new Passenger();
        passager.pType=1;
        passager.vip=2;
        passager.cabin=3;
        passager.airLine=4;
        var result = freeBaggages(passager);
        should.equal(result.length, 2);
        should.equal(result[0].special, 11);
        should.equal(result[0].size, 158);
        should.equal(result[0].weight, 23);
    });
    it("12", function()
    {
        var passager = new Passenger();
        passager.pType=1;
        passager.vip=0;
        passager.cabin=2;
        passager.airLine=5;
        var result = freeBaggages(passager);
        should.equal(result.length, 2);
        should.equal(result[0].special, 11);
        should.equal(result[0].size, 158);
        should.equal(result[0].weight, 23);
    });
    it("13", function()
    {
        var passager = new Passenger();
        passager.pType=1;
        passager.vip=1;
        passager.cabin=1;
        passager.airLine=2;
        var result = freeBaggages(passager);
        should.equal(result.length, 2);
        should.equal(result[0].special, 11);
        should.equal(result[0].size, 158);
        should.equal(result[0].weight, 23);
    });
    it("14", function()
    {
        var passenger = new Passenger();
        passenger.pType=0;
        passenger.vip=2;
        passenger.cabin=2;
        passenger.airLine=3;
        var result = freeBaggages(passenger);
        should.equal(result.length, 2);
        should.equal(result[0].special, 11);
        should.equal(result[0].size, 158);
        should.equal(result[0].weight, 23);
    });
})

describe("测试计算函数", function()
{
    it("1", function()
    {
        var passager = new Passenger();
        passager.pType=0;
        passager.vip=0;
        passager.cabin=0;
        passager.airLine=0;
        passager.tPrice=1000;
        var baggages = new Array();
        var b1 = new Baggage();
        var b2 = new Baggage();
        var b3 = new Baggage();
        b1.size=30;
        b1.weight=10;
        b1.special=0;
        b2.size=200;
        b2.weight=40;
        b2.special=11;
        b3.size=100;
        b3.weight=20;
        b3.special=7;
        baggages[0]=b1;
        baggages[1]=b2;
        baggages[2]=b3;
        var result = calculate(passager,baggages);
        should.equal(result, 640);
    });
    it("2", function()
    {
        var passager = new Passenger();
        passager.pType=0;
        passager.vip=0;
        passager.cabin=1;
        passager.airLine=0;
        passager.tPrice=1000;
        var baggages = new Array();
        var b1 = new Baggage();
        var b2 = new Baggage();
        var b3 = new Baggage();
        b1.size=30;
        b1.weight=10;
        b1.special=0;
        b2.size=200;
        b2.weight=40;
        b2.special=11;
        b3.size=100;
        b3.weight=20;
        b3.special=7;
        baggages[0]=b1;
        baggages[1]=b2;
        baggages[2]=b3;
        var result = calculate(passager,baggages);
        should.equal(result, 790);
    });
    it("3", function()
    {
        var passager = new Passenger();
        passager.pType=0;
        passager.vip=0;
        passager.cabin=2;
        passager.airLine=0;
        passager.tPrice=1000;
        var baggages = new Array();
        var b1 = new Baggage();
        var b2 = new Baggage();
        var b3 = new Baggage();
        b1.size=30;
        b1.weight=10;
        b1.special=0;
        b2.size=200;
        b2.weight=40;
        b2.special=11;
        b3.size=100;
        b3.weight=20;
        b3.special=7;
        baggages[0]=b1;
        baggages[1]=b2;
        baggages[2]=b3;
        var result = calculate(passager,baggages);
        should.equal(result, 940);
    });
    it("4", function()
    {
        var passager = new Passenger();
        passager.pType=0;
        passager.vip=0;
        passager.cabin=3;
        passager.airLine=0;
        passager.tPrice=1000;
        var baggages = new Array();
        var b1 = new Baggage();
        var b2 = new Baggage();
        var b3 = new Baggage();
        b1.size=30;
        b1.weight=10;
        b1.special=0;
        b2.size=200;
        b2.weight=40;
        b2.special=11;
        b3.size=100;
        b3.weight=20;
        b3.special=7;
        baggages[0]=b1;
        baggages[1]=b2;
        baggages[2]=b3;
        var result = calculate(passager,baggages);
        should.equal(result, 940);
    });
    it("5", function()
    {
        var passager = new Passenger();
        passager.pType=0;
        passager.vip=1;
        passager.cabin=0;
        passager.airLine=0;
        passager.tPrice=1000;
        var baggages = new Array();
        var b1 = new Baggage();
        var b2 = new Baggage();
        var b3 = new Baggage();
        b1.size=30;
        b1.weight=10;
        b1.special=0;
        b2.size=200;
        b2.weight=40;
        b2.special=11;
        b3.size=100;
        b3.weight=20;
        b3.special=7;
        baggages[0]=b1;
        baggages[1]=b2;
        baggages[2]=b3;
        var result = calculate(passager,baggages);
        should.equal(result, 490);
    });
    it("6", function()
    {
        var passager = new Passenger();
        passager.pType=0;
        passager.vip=1;
        passager.cabin=1;
        passager.airLine=0;
        passager.tPrice=1000;
        var baggages = new Array();
        var b1 = new Baggage();
        var b2 = new Baggage();
        var b3 = new Baggage();
        b1.size=30;
        b1.weight=10;
        b1.special=0;
        b2.size=200;
        b2.weight=40;
        b2.special=11;
        b3.size=100;
        b3.weight=20;
        b3.special=7;
        baggages[0]=b1;
        baggages[1]=b2;
        baggages[2]=b3;
        var result = calculate(passager,baggages);
        should.equal(result, 640);
    });
    it("7", function()
    {
        var passager = new Passenger();
        passager.pType=0;
        passager.vip=1;
        passager.cabin=2;
        passager.airLine=0;
        passager.tPrice=1000;
        var baggages = new Array();
        var b1 = new Baggage();
        var b2 = new Baggage();
        var b3 = new Baggage();
        b1.size=30;
        b1.weight=10;
        b1.special=0;
        b2.size=200;
        b2.weight=40;
        b2.special=11;
        b3.size=100;
        b3.weight=20;
        b3.special=7;
        baggages[0]=b1;
        baggages[1]=b2;
        baggages[2]=b3;
        var result = calculate(passager,baggages);
        should.equal(result, 640);
    });
    it("8", function()
    {
        var passager = new Passenger();
        passager.pType=0;
        passager.vip=1;
        passager.cabin=3;
        passager.airLine=0;
        passager.tPrice=1000;
        var baggages = new Array();
        var b1 = new Baggage();
        var b2 = new Baggage();
        var b3 = new Baggage();
        b1.size=30;
        b1.weight=10;
        b1.special=0;
        b2.size=200;
        b2.weight=40;
        b2.special=11;
        b3.size=100;
        b3.weight=20;
        b3.special=7;
        baggages[0]=b1;
        baggages[1]=b2;
        baggages[2]=b3;
        var result = calculate(passager,baggages);
        should.equal(result, 640);
    });
    it("9", function()
    {
        var passager = new Passenger();
        passager.pType=0;
        passager.vip=2;
        passager.cabin=0;
        passager.airLine=0;
        passager.tPrice=1000;
        var baggages = new Array();
        var b1 = new Baggage();
        var b2 = new Baggage();
        var b3 = new Baggage();
        b1.size=30;
        b1.weight=10;
        b1.special=0;
        b2.size=200;
        b2.weight=40;
        b2.special=11;
        b3.size=100;
        b3.weight=20;
        b3.special=7;
        baggages[0]=b1;
        baggages[1]=b2;
        baggages[2]=b3;
        var result = calculate(passager,baggages);
        should.equal(result, 490);
    });
    it("10", function()
    {
        var passager = new Passenger();
        passager.pType=0;
        passager.vip=2;
        passager.cabin=1;
        passager.airLine=0;
        passager.tPrice=1000;
        var baggages = new Array();
        var b1 = new Baggage();
        var b2 = new Baggage();
        var b3 = new Baggage();
        b1.size=30;
        b1.weight=10;
        b1.special=0;
        b2.size=200;
        b2.weight=40;
        b2.special=11;
        b3.size=100;
        b3.weight=20;
        b3.special=7;
        baggages[0]=b1;
        baggages[1]=b2;
        baggages[2]=b3;
        var result = calculate(passager,baggages);
        should.equal(result, 640);
    });
    it("11", function()
    {
        var passager = new Passenger();
        passager.pType=0;
        passager.vip=2;
        passager.cabin=2;
        passager.airLine=0;
        passager.tPrice=1000;
        var baggages = new Array();
        var b1 = new Baggage();
        var b2 = new Baggage();
        var b3 = new Baggage();
        b1.size=30;
        b1.weight=10;
        b1.special=0;
        b2.size=200;
        b2.weight=40;
        b2.special=11;
        b3.size=100;
        b3.weight=20;
        b3.special=7;
        baggages[0]=b1;
        baggages[1]=b2;
        baggages[2]=b3;
        var result = calculate(passager,baggages);
        should.equal(result, 790);
    });
    it("12", function()
    {
        var passager = new Passenger();
        passager.pType=0;
        passager.vip=2;
        passager.cabin=3;
        passager.airLine=0;
        passager.tPrice=1000;
        var baggages = new Array();
        var b1 = new Baggage();
        var b2 = new Baggage();
        var b3 = new Baggage();
        b1.size=30;
        b1.weight=10;
        b1.special=0;
        b2.size=200;
        b2.weight=40;
        b2.special=11;
        b3.size=100;
        b3.weight=20;
        b3.special=7;
        baggages[0]=b1;
        baggages[1]=b2;
        baggages[2]=b3;
        var result = calculate(passager,baggages);
        should.equal(result, 790);
    });
    it("13", function()
    {
        var passager = new Passenger();
        passager.pType=1;
        passager.vip=0;
        passager.cabin=0;
        passager.airLine=0;
        passager.tPrice=1000;
        var baggages = new Array();
        var b1 = new Baggage();
        b1.size=100;
        b1.weight=30;
        b1.special=3;
        baggages[0]=b1;
        var result = calculate(passager,baggages);
        should.equal(result, 0);
    });
    it("14", function()
    {
        var passager = new Passenger();
        passager.pType=1;
        passager.vip=0;
        passager.cabin=0;
        passager.airLine=0;
        passager.tPrice=1000;
        var baggages = new Array();
        var b1 = new Baggage();
        var b2 = new Baggage();
        b1.size=100;
        b1.weight=30;
        b1.special=3;
        b2.size=30;
        b2.weight=10;
        b2.special=0;
        baggages[0]=b1;
        baggages[1]=b2;
        var result = calculate(passager,baggages);
        should.equal(result, 0);
    });
});