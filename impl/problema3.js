var fc = 0.7;
var vl = 120;
var vc;
var calc = function (vlc) { return 300 * (1 / vlc - 1); };
var x = calc(fc);
var vla = vl * 1.2;
var multa = function (fc) {
    if (fc <= vl) {
        console.log(" A velocidade do carro: " + fc.toFixed(2) + " o valor da multa \u00E9 de R$ 0,00 ");
    }
    else if (x > 120 && calc(fc) <= 144) {
        console.log(" A velocidade do carro: " + fc.toFixed(2) + " o valor da multa \u00E9 de R$ 127,69 ");
    }
    else {
        console.log("A velocidade do carro: " + fc.toFixed(2) + " o valor da multa \u00E9 de R$ 574,62  ");
    }
};
