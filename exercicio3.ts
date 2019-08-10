
let fc: number = 0.7
let vl: number = 120

let calc = (vlc: number) => 300 * (1/vlc - 1)

let x = calc(fc)

let vla: number = vl * 1.2

let multa = (fc: number) =>{
   if(fc <= vl){
     console.log(` A velocidade do carro: ${fc.toFixed(2)} o valor da multa é de R$ 0,00 `)
}
   else if(x > 120 && calc(fc) <= 144){
    console.log(` A velocidade do carro: ${fc.toFixed(2)} o valor da multa é de R$ 127,69 `)
}
   else{
    console.log(`A velocidade do carro: ${fc.toFixed(2)} o valor da multa é de R$ 574,62  `)
} 

}

multa(x)



