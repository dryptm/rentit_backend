function myFunction() {
    // var equation = "X2Y+Y2Z=XZ+XY3Z"
    var equation = document.getElementById("myText").value;
    var a = equation.split("=")

    var b = a[0].split("+")
    var c = a[1].split("+")

    var el = []
    var spread = equation.split('')
    for (var i = 0; i < spread.length; i++) {
        if (spread[i] == "1" || spread[i] == "2" || spread[i] == "3" || spread[i] == "4" || spread[i] == "5" || spread[i] == "6" || spread[i] == "7" || spread[i] == "8" || spread[i] == "9" || spread[i] == "0" || spread[i] == "+" || spread[i] == "-" || spread[i] == ">") {} else {
            el.push(spread[i])
        }
    }

    var elr = [];
    elr = el.filter(function (item, i, ar) {
        return ar.indexOf(item) === i;
    });

    var A, B, C, D;

    var z1 = [1, 1, 1, 1]
    var z2 = [1, 1, 1, 1]
    var z3 = [1, 1, 1, 1]
    var z4 = [1, 1, 1, 1]

    for (var i = 0; i < b[0].length; i++) {
        if (b[0][i] == elr[0]) {

            if (i == (b[0].length) - 1) {
                z1[0] = 1
            } else {
                if (b[0][i + 1] == "1" || b[0][i + 1] == "2" || b[0][i + 1] == "3" || b[0][i + 1] == "4" || b[0][i + 1] == "5" || b[0][i + 1] == "6" || b[0][i + 1] == "7" || b[0][i + 1] == "8" || b[0][i + 1] == "9") {

                    z1[0] = Number(b[0][i + 1])
                }
            }
            break;
        } else {
            z1[0] = 0
        }
    }


    for (var i = 0; i < b[0].length; i++) {
        if (b[0][i] == elr[1]) {

            if (i == (b[0].length) - 1) {
                z1[1] = 1
            } else {
                if (b[0][i + 1] == "1" || b[0][i + 1] == "2" || b[0][i + 1] == "3" || b[0][i + 1] == "4" || b[0][i + 1] == "5" || b[0][i + 1] == "6" || b[0][i + 1] == "7" || b[0][i + 1] == "8" || b[0][i + 1] == "9") {

                    z1[1] = Number(b[0][i + 1])
                }
            }
            break;
        } else {
            z1[1] = 0
        }
    }


    for (var i = 0; i < b[0].length; i++) {
        if (b[0][i] == elr[2]) {

            if (i == (b[0].length) - 1) {
                z1[2] = 1
            } else {
                if (b[0][i + 1] == "1" || b[0][i + 1] == "2" || b[0][i + 1] == "3" || b[0][i + 1] == "4" || b[0][i + 1] == "5" || b[0][i + 1] == "6" || b[0][i + 1] == "7" || b[0][i + 1] == "8" || b[0][i + 1] == "9") {

                    z1[2] = Number(b[0][i + 1])
                }
            }
            break;
        } else {
            z1[2] = 0
        }
    }



    for (var i = 0; i < b[1].length; i++) {
        if (b[1][i] == elr[0]) {

            if (i == (b[1].length) - 1) {
                z2[0] = 1
            } else {
                if (b[1][i + 1] == "1" || b[1][i + 1] == "2" || b[1][i + 1] == "3" || b[1][i + 1] == "4" || b[1][i + 1] == "5" || b[1][i + 1] == "6" || b[1][i + 1] == "7" || b[1][i + 1] == "8" || b[1][i + 1] == "9") {

                    z2[0] = Number(b[1][i + 1])
                }
            }
            break;
        } else {
            z2[0] = 0
        }
    }


    for (var i = 0; i < b[1].length; i++) {
        if (b[1][i] == elr[1]) {

            if (i == (b[1].length) - 1) {
                z2[1] = 1
            } else {
                if (b[1][i + 1] == "1" || b[1][i + 1] == "2" || b[1][i + 1] == "3" || b[1][i + 1] == "4" || b[1][i + 1] == "5" || b[1][i + 1] == "6" || b[1][i + 1] == "7" || b[1][i + 1] == "8" || b[1][i + 1] == "9") {

                    z2[1] = Number(b[1][i + 1])
                }
            }
            break;
        } else {
            z2[1] = 0
        }
    }


    for (var i = 0; i < b[1].length; i++) {
        if (b[1][i] == elr[2]) {

            if (i == (b[1].length) - 1) {
                z2[2] = 1
            } else {
                if (b[1][i + 1] == "1" || b[1][i + 1] == "2" || b[1][i + 1] == "3" || b[1][i + 1] == "4" || b[1][i + 1] == "5" || b[1][i + 1] == "6" || b[1][i + 1] == "7" || b[1][i + 1] == "8" || b[1][i + 1] == "9") {

                    z2[2] = Number(b[1][i + 1])
                }
            }
            break;
        } else {
            z2[2] = 0
        }
    }


    for (var i = 0; i < c[0].length; i++) {
        if (c[0][i] == elr[0]) {

            if (i == (c[0].length) - 1) {
                z3[0] = 1
            } else {
                if (c[0][i + 1] == "1" || c[0][i + 1] == "2" || c[0][i + 1] == "3" || c[0][i + 1] == "4" || c[0][i + 1] == "5" || c[0][i + 1] == "6" || c[0][i + 1] == "7" || c[0][i + 1] == "8" || c[0][i + 1] == "9") {

                    z3[0] = Number(c[0][i + 1])
                }
            }
            break;
        } else {
            z3[0] = 0
        }
    }



    for (var i = 0; i < c[0].length; i++) {
        if (c[0][i] == elr[1]) {

            if (i == (c[0].length) - 1) {
                z3[1] = 1
            } else {
                if (c[0][i + 1] == "1" || c[0][i + 1] == "2" || c[0][i + 1] == "3" || c[0][i + 1] == "4" || c[0][i + 1] == "5" || c[0][i + 1] == "6" || c[0][i + 1] == "7" || c[0][i + 1] == "8" || c[0][i + 1] == "9") {

                    z3[1] = Number(c[0][i + 1])
                }
            }
            break;
        } else {
            z3[1] = 0
        }
    }


    for (var i = 0; i < c[0].length; i++) {
        if (c[0][i] == elr[2]) {

            if (i == (c[0].length) - 1) {
                z3[2] = 1
            } else {
                if (c[0][i + 1] == "1" || c[0][i + 1] == "2" || c[0][i + 1] == "3" || c[0][i + 1] == "4" || c[0][i + 1] == "5" || c[0][i + 1] == "6" || c[0][i + 1] == "7" || c[0][i + 1] == "8" || c[0][i + 1] == "9") {

                    z3[2] = Number(c[0][i + 1])
                }
            }
            break;
        } else {
            z3[2] = 0
        }
    }


    for (var i = 0; i < c[1].length; i++) {
        if (c[1][i] == elr[0]) {

            if (i == (c[1].length) - 1) {
                z4[0] = 1
            } else {
                if (c[1][i + 1] == "1" || c[1][i + 1] == "2" || c[1][i + 1] == "3" || c[1][i + 1] == "4" || c[1][i + 1] == "5" || c[1][i + 1] == "6" || c[1][i + 1] == "7" || c[1][i + 1] == "8" || c[1][i + 1] == "9") {

                    z4[0] = Number(c[1][i + 1])
                }
            }
            break;
        } else {
            z4[0] = 0
        }
    }

    for (var i = 0; i < c[1].length; i++) {
        if (c[1][i] == elr[1]) {

            if (i == (c[1].length) - 1) {
                z4[1] = 1
            } else {
                if (c[1][i + 1] == "1" || c[1][i + 1] == "2" || c[1][i + 1] == "3" || c[1][i + 1] == "4" || c[1][i + 1] == "5" || c[1][i + 1] == "6" || c[1][i + 1] == "7" || c[1][i + 1] == "8" || c[1][i + 1] == "9") {

                    z4[1] = Number(c[1][i + 1])
                }
            }
            break;
        } else {
            z4[1] = 0
        }
    }


    for (var i = 0; i < c[1].length; i++) {
        if (c[1][i] == elr[2]) {

            if (i == (c[1].length) - 1) {
                z4[2] = 1
            } else {
                if (c[1][i + 1] == "1" || c[1][i + 1] == "2" || c[1][i + 1] == "3" || c[1][i + 1] == "4" || c[1][i + 1] == "5" || c[1][i + 1] == "6" || c[1][i + 1] == "7" || c[1][i + 1] == "8" || c[1][i + 1] == "9") {

                    z4[2] = Number(c[1][i + 1])
                }
            }
            break;
        } else {
            z4[2] = 0
        }
    }












    var xa, ya, za, xb, yb, zb, xc, yc, zc, xd, yd, zd;
    xa = z1[0]
    xb = z2[0]
    xc = z3[0]
    xd = z4[0]
    ya = z1[1]
    yb = z2[1]
    yc = z3[1]
    yd = z4[1]
    za = z1[2]
    zb = z2[2]
    zc = z3[2]
    zd = z4[2]

    var newz1 = [xb, xc, xd, xa]
    var newz2 = [yb, yc, yd, ya]
    var newz3 = [zb, zc, zd, za]

    var eq1 = "",
        eq2 = "",
        eq3 = "";
    for (var i = 0; i < 4; i++) {
        if (newz1[i] != 0) {
            if (i == 0) {
                eq1 = eq1 + "-" + newz1[i].toString() + "x" + "+"
            }
        }
        if (newz1[i] != 0) {
            if (i == 1) {
                eq1 = eq1 + newz1[i].toString() + "y" + "+"
            }
        }
        if (newz1[i] != 0) {
            if (i == 2) {
                eq1 = eq1 + newz1[i].toString() + "z"
            }
        }

        if (newz2[i] != 0) {
            if (i == 0) {
                eq2 = eq2 + "-" + newz2[i].toString() + "x" + "+"
            }
        }
        if (newz2[i] != 0) {
            if (i == 1) {
                eq2 = eq2 + newz2[i].toString() + "y" + "+"
            }
        }
        if (newz2[i] != 0) {
            if (i == 2) {
                eq2 = eq2 + newz2[i].toString() + "z"
            }
        }

        if (newz3[i] != 0) {
            if (i == 0) {
                eq3 = eq3 + "-" + newz3[i].toString() + "x" + "+"
            }
        }
        if (newz3[i] != 0) {
            if (i == 1) {
                eq3 = eq3 + newz3[i].toString() + "y" + "+"
            }
        }
        if (newz3[i] != 0) {
            if (i == 2) {
                eq3 = eq3 + newz3[i].toString() + "z"
            }
        }
    }
    if (eq1[eq1.length - 1] == "+") {
        eq1 = eq1.slice(0, -1)
    }
    if (eq2[eq2.length - 1] == "+") {
        eq2 = eq2.slice(0, -1)
    }
    if (eq3[eq3.length - 1] == "+") {
        eq3 = eq3.slice(0, -1)
    }
    eq1 = eq1 + "=" + xa.toString()
    eq2 = eq2 + "=" + ya.toString()
    eq3 = eq3 + "=" + za.toString()




    var str1 = eq1,
        str2 = eq2,
        str3 = eq3;
    var x7 = nerdamer.solveEquations([str1, str2, str3]);


    var eqx = x7.toString();


    A = 1
    B = Number(eqx.split(",")[1])
    C = Number(eqx.split(",")[3])
    D = Number(eqx.split(",")[5])

    function nt(n) {
        var result = (n - Math.floor(n)) !== 0;

        if (result)
            return '1';
        else
            return '0';
    }

    for (var i = 1; i < 99; i++) {
        var fan1, fan2, fan3, fan4;
        fan1 = i * A;
        fan2 = i * B;
        fan3 = i * C;
        fan4 = i * D;
        if (nt(fan1) == 0 && nt(fan2) == 0 && nt(fan3) == 0 && nt(fan4) == 0) {
            A = fan1;
            B = fan2;
            C = fan3;
            D = fan4;
            break;

        }
    }


    var equation_new = A + "" + b[0] + "+" + B + "" + b[1] + "=" + C + "" + c[0] + "+" + D + "" + c[1];

    document.getElementById("demo").innerHTML = equation_new;

}