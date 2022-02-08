class Passenger {  // 创建类
    constructor() {  // 类构造方法
        this.pType = 0;  // 类主体/属性
        this.vip = 0;
        this.cabin = 0;
        this.airLine = 0;
        this.tPrice = 0;
    }
}

class Baggage {
    constructor() {
        this.special = 0;
        this.size = 0;
        this.weight = 0;
        this.type = 0;
    }
}

function calculate(passenger, baggages) {
/*    var baggages = new Array();//{[行李类型，行李尺寸，行李重量],[],...}
    var passenger = new Object();//type=*/
    /*size, weight, special(0仅限普通,1普通+特殊,2仅限婴儿车)*/
    var free = freeBaggages(passenger);//计算免费托运行李额
    var over = overBaggages(free, baggages, passenger.airLine);
    var cost = chargeBaggages(passenger, over);
    return cost;
}

/*计算免费行李额*/
function freeBaggages(passenger) {
    var free = new Array();
    var size = 0;
    if (passenger.airLine == 0) {//国内航线
        var num = 0;
        size = 200;
        //class baggage{size, weight, special(0, 1)}
        var baggage = new Baggage();
        baggage.size = size;
        if (passenger.pType == 0) {//成人
            switch (passenger.cabin) {
                case 0:
                    baggage.weight = 40;break;
                case 1:
                    baggage.weight = 30;break;
                case 2: case 3:
                    baggage.weight = 20;break;
            }
        } else {//婴儿
            baggage.weight = 10;
            var baggage2 = new Baggage();
            baggage2.size = size;
            baggage2.weight = 0;
            baggage2.special = 3;//婴儿票的婴儿车，免费
            free[num] = baggage2;
            num++;
        }
        baggage.special = 11;//表示可为特殊行李
        free[num] = baggage;
        num++;
        baggage = new Baggage();
        baggage.size = size;
        baggage.weight = 0;
        baggage.special = 11;

        switch (passenger.vip){//会员类型
            case 0:
                return free;break;
            case 1:
                baggage.weight = 30;break;
            case 2:
                baggage.weight = 20;break;
        }
        free[num] = baggage;
        return free;
    }
    else{//国际航线
        var num = 0;
        size = 158;
        var baggage = new Baggage();
        baggage.size = size;
        baggage.special = 11;
        if (passenger.pType == 0) {//成人
            switch (passenger.cabin) {
                case 0: case 1:
                    baggage.weight = 32;
                    free[num] = baggage;
                    num++;
                    free[num] = baggage;
                    num++;
                    break;
                case 2:
                    baggage.weight = 23;
                    free[num] = baggage;
                    num++;
                    free[num] = baggage;
                    num++;
                    break;
                case 3:
                    baggage.weight = 20;
                    free[num] = baggage;
                    num++;
                    if (passenger.airLine != 5) {
                        free[num] = baggage;
                        num++;
                    }
                    break;
            }
        } else {//婴儿
            baggage.weight = 23;
            free[num] = baggage;
            num++;
            var baggage2 = new Baggage();
            baggage2.size = size;
            baggage2.weight = 0;
            baggage2.special = 3;//婴儿票的婴儿车，免费
            free[num] = baggage2;
            num++;
        }
        return free;
    }
}

/*计算超限行李*/
function overBaggages(free, baggages, airLine){
    quickSort(free, 0, free.length-1);
    quickSort(baggages, 0, baggages.length-1);
    var over = new Array();
    num = 0;//over_num
    var num1 = 0;//辅助设备1
    var num2 = 0;//辅助设备2
    for(var i = 0;i<baggages.length;i++){
        var baggage = baggages[i];
        switch (baggage.special) {
            case 0: case 11:
                if (airLine == 0) {//如果是国内航线，尽量给免费行李额匹配更大的行李
                    var flag = 0;
                    var l = free.length;
                    for (var j = 0; j < l; j++) {
                        //删去该免费行李额
                        if (baggage.weight <= free[j].weight) {
                            flag = 1;
                            free.splice(j, 1);
                            break;
                        } else {
                            flag = 0;
                            baggage.weight -= free[j].weight;
                            free.splice(j, 1);
                            break;
                        }
                    }
                    //否则作为超额行李
                    if (flag == 0) {
                        over[num++] = baggage;
                    }
                    break;
                } else {//如果是国际航线，尽量在免费行李额内匹配合适的行李
                    var flag = 0;
                    var l = free.length;
                    for (var j = 0; j < l; j++) {
                        //如果该行李可作为免费行李
                        if (baggage.weight <= free[j].weight && baggage.size <= free[j].size) {
                            //删去该免费行李额
                            free.splice(j, 1);
                            flag = 1;
                            break;
                        }
                    }
                    //否则作为超额行李
                    if (flag == 0) {
                        baggage.type = 2;//超出件数的行李
                        over[num++] = baggage;
                    }
                    break;
                }
            case 1://辅助设备1
                num1++;
                if (num1 + num2 > 2 && num1 > 1) {
                    baggages[i].special = 11;//超出限额的免费辅助设备将变为11号特殊行李
                    i--;
                    continue;
                }
                break;
            case 2://辅助设备2
                num2++;
                if (num1 + num2 > 2 || num2 >1 ) {
                    baggages[i].special = 11;
                    i--;
                    continue;
                }
                break;
            case 3://免费婴儿车
                var flag = 0;
                var l = free.length;
                for (var j = 0; j < l; j++) {
                    if (free[j].special == 3) {
                        free.splice(j, 1);
                        flag = 1;
                        break;
                    }
                }
                if (flag == 0) {//超出限额的免费婴儿车将变为11号特殊行李
                    baggages[i].special = 11;
                    i--;
                    continue;
                }
                break;
            case 4:
                break;
            default:
                over[num++] = baggage;
                break;
        }
    }
    if(airLine != 0) {//如果不是国内航线
        var l = free.length;
        for (var i = over.length - 1; i >= 0; i--) {
            if (l > 0) {
                over[i].type = 1;//表示为超重量/尺寸行李
                //over[i].weight -= free[free.length-1].weight;
                //over[i].size -= free[free.length-1].size;
                l--;
            }
        }
    }
    return over;
}

/*计算超限行李收费*/
function chargeBaggages(passenger, baggages) {
    var cost = 0;
    var l = baggages.length;
    //计算除11外的特殊行李
    for(var i=0;i<l;i++) {
        switch(baggages[i].special){
            case 5:
                if(baggages[i].weight>=2&&baggages[i].weight<=23)
                    cost+=2600;
                else if(baggages[i].weight>23&&baggages[i].weight<=32)
                    cost+=3900;
                else
                    cost+=5200;
                break;
            case 6:
                if(baggages[i].weight>=2&&baggages[i].weight<=23)
                    cost+=1300;
                else if(baggages[i].weight>23&&baggages[i].weight<=32)
                    cost+=2600;
                else
                    cost+=3900;
                break;
            case 7:
                if(baggages[i].weight>=2&&baggages[i].weight<=23)
                    cost+=490;
                else
                    cost+=3900;
                break;
            case 8:
                if(baggages[i].weight>=2&&baggages[i].weight<=23)
                    cost+=1300;
                else
                    cost+=2600;
                break;
            case 9:
                    cost+=1300;
                break;
            case 10:
                if(baggages[i].weight>=2&&baggages[i].weight<=8)
                    cost+=3900;
                else if(baggages[i].weight>8&&baggages[i].weight<=23)
                    cost+=5200;
                else
                    cost+=7800;
                break;
            default:
                break;
        }
    }

    if(passenger.airLine==0){//国内航线
        for(var i = 0; i<baggages.length;i++) {
            if (baggages[i].special == 0 || baggages[i].special == 11) {
                cost += baggages[i].weight * 0.015 * passenger.tPrice;
            }
        }
        return cost;
    }
    else {
        var overNum = 0;
        switch (passenger.airLine) {
            case 1:
                for (var i = 0; i < baggages.length; i++) {
                    if (baggages[i].special == 0 || baggages[i].special == 11) {
                        if (baggages[i].type == 2) {
                            overNum++;
                            if (passenger.cabin <= 1) {
                                baggages[i].weight = 0;
                            }
                        }
                        if (baggages[i].weight > 23 && baggages[i].weight <= 28 && baggages[i].size <= 158) {
                            cost += 380;
                        } else if (baggages[i].weight > 28 && baggages[i].weight <= 32 && baggages[i].size <= 158) {
                            cost += 980;
                        } else if (baggages[i].weight <= 23 && baggages[i].size > 158 && baggages[i].size <= 203) {
                            cost += 980;
                        } else if (baggages[i].weight > 23 && baggages[i].weight <= 32 && baggages[i].size > 158 && baggages[i].size <= 203) {
                            cost += 1400;
                        }
                    }
                }
                if (overNum == 1)
                    cost += 1400;
                else if (overNum == 2)
                    cost += 1400 + 2000;
                else if (overNum >= 3)
                    cost += 1400 + 2000 + (overNum - 2) * 3000;
                break;
            case 2:
                for (var i = 0; i < baggages.length; i++) {
                    if (baggages[i].special == 0 || baggages[i].special == 11) {
                        if (baggages[i].type == 2) {
                            overNum++;
                            if (passenger.cabin <= 1) {
                                baggages[i].weight = 0;
                            }
                        }
                        if (baggages[i].weight > 23 && baggages[i].weight <= 28 && baggages[i].size <= 158) {
                            cost += 280;
                        } else if (baggages[i].weight > 28 && baggages[i].weight <= 32 && baggages[i].size <= 158) {
                            cost += 690;
                        } else if (baggages[i].weight <= 23 && baggages[i].size > 158 && baggages[i].size <= 203) {
                            cost += 690;
                        } else if (baggages[i].weight > 23 && baggages[i].weight <= 32 && baggages[i].size > 158 && baggages[i].size <= 203) {
                            cost += 1100;
                        }
                    }
                }
                if (overNum == 1)
                    cost += 1100;
                else if (overNum == 2)
                    cost += 1100 + 1100;
                else if (overNum >= 3)
                    cost += 1100 + 1100 + (overNum - 2) * 1590;
                break;
            case 3:
                for (var i = 0; i < baggages.length; i++) {
                    if (baggages[i].special == 0 || baggages[i].special == 11) {
                        if (baggages[i].type == 2) {
                            overNum++;
                            if (passenger.cabin <= 1) {
                                baggages[i].weight = 0;
                            }
                        }
                        if (baggages[i].weight > 23 || baggages[i].size > 158 == 1) {
                            cost += 520;
                        }
                    }
                }
                if (overNum == 1)
                    cost += 1170;
                else if (overNum == 2)
                    cost += 1170 + 1170;
                else if (overNum >= 3)
                    cost += 1170 + 1170 + (overNum - 2) * 1590;
                break;
            case 4:
                for (var i = 0; i < baggages.length; i++) {
                    if (baggages[i].special == 0 || baggages[i].special == 11) {
                        if (baggages[i].type == 2) {
                            overNum++;
                            if (passenger.cabin <= 1) {
                                baggages[i].weight = 0;
                            }
                        }
                        if (baggages[i].weight > 23 && baggages[i].weight <= 28 && baggages[i].size <= 158) {
                            cost += 690;
                        } else if (baggages[i].weight > 28 && baggages[i].weight <= 32 && baggages[i].size <= 158) {
                            cost += 1040;
                        } else if (baggages[i].weight <= 23 && baggages[i].size > 158 && baggages[i].size <= 203) {
                            cost += 1040;
                        } else if (baggages[i].weight > 23 && baggages[i].weight <= 32 && baggages[i].size > 158 && baggages[i].size <= 203) {
                            cost += 2050;
                        }
                    }
                }
                if (overNum == 1)
                    cost += 1380;
                else if (overNum == 2)
                    cost += 1380 + 1380;
                else if (overNum >= 3)
                    cost += 1380 + 1380 + (overNum - 2) * 1590;
                break;
            case 5:
                for (var i = 0; i < baggages.length; i++) {
                    if (baggages[i].special == 0 || baggages[i].special == 11) {
                        if (baggages[i].type == 2) {
                            overNum++;
                            if (passenger.cabin <= 1) {
                                baggages[i].weight = 0;
                            }
                        }
                        if (baggages[i].weight > 23 && baggages[i].weight <= 28 && baggages[i].size <= 158) {
                            cost += 210;
                        } else if (baggages[i].weight > 28 && baggages[i].weight <= 32 && baggages[i].size <= 158) {
                            cost += 520;
                        } else if (baggages[i].weight <= 23 && baggages[i].size > 158 && baggages[i].size <= 203) {
                            cost += 520;
                        } else if (baggages[i].weight > 23 && baggages[i].weight <= 32 && baggages[i].size > 158 && baggages[i].size <= 203) {
                            cost += 830;
                        }
                    }
                }
                if (overNum == 1)
                    cost += 830;
                else if (overNum == 2)
                    cost += 830 + 1100;
                else if (overNum >= 3)
                    cost += 830 + 1100 + (overNum - 2) * 1590;
                break;
            default:
                break;
        }
        return cost;
    }
}

/*从大到小排序*/
function quickSort(arr, begin, end) {
    //递归出口
    if(begin >= end)
        return;
    var l = begin; // 左指针
    var r = end; //右指针
    var temp = arr[begin]; //基准数，这里取数组第一个数
    //左右指针相遇的时候退出扫描循环
    while(l < r) {
        //右指针从右向左扫描，碰到第一个大于基准数的时候停住
        while(l < r && arr[r].weight <= temp.weight)
            r --;
        //左指针从左向右扫描，碰到第一个小于基准数的时候停住
        while(l < r && arr[l].weight >= temp.weight)
            l ++;
        //交换左右指针所停位置的数
        [arr[l], arr[r]] = [arr[r], arr[l]];
    }
    //最后交换基准数与指针相遇位置的数
    [arr[begin], arr[l]] = [arr[l], arr[begin]];
    //递归处理左右数组
    quickSort(arr, begin, l - 1);
    quickSort(arr, l + 1, end);
}