var n = 10;
var fconceito = function (conceito) {
    if (n == 0) {
        console.log("Conceito: E");
    }
    else if (n > 0 && n <= 35) {
        console.log("Conceito: D");
    }
    else if (n >= 36 && n <= 60) {
        console.log("Conceito: C");
    }
    else if (n >= 61 && n <= 85) {
        console.log("Conceito: B");
    }
    else {
        console.log("Console: A");
    }
};
fconceito(10);
