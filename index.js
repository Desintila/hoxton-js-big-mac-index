let usBigMacPrice =5.66;
let switzerlandBigMacPrice= 6.50;
let bigMacPPPSwitzerland=switzerlandBigMacPrice / usBigMacPrice;
let actualExchangeRateCHFDollar = 0.92;
let bigMacIndexSwitzerland= (( bigMacPPPSwitzerland-actualExchangeRateCHFDollar ) /actualExchangeRateCHFDollar)*100;
console.log(bigMacIndexSwitzerland.toFixed(2));

let canadaBigMacPrice= 6.77;
let bigMacPPPCanada=canadaBigMacPrice / usBigMacPrice;
let actualExchangeRateCADDollar = 1.27;
let bigMacIndexCanada= (( bigMacPPPCanada-actualExchangeRateCADDollar ) /actualExchangeRateCADDollar)*100;
console.log(bigMacIndexCanada.toFixed(2));

let israelBigMacPrice= 17.00;
let bigMacPPPIsrael=israelBigMacPrice / usBigMacPrice;
let actualExchangeRateILSDollar = 3.29;
let bigMacIndexIsrael= (( bigMacPPPIsrael-actualExchangeRateILSDollar ) /actualExchangeRateILSDollar)*100;
console.log(bigMacIndexIsrael.toFixed(2));

let norwayBigMacPrice= 57.00;
let bigMacPPPNorway=norwayBigMacPrice / usBigMacPrice;
let actualExchangeRateNOKDollar = 9.04;
let bigMacIndexNorway= (( bigMacPPPNorway-actualExchangeRateNOKDollar ) /actualExchangeRateNOKDollar)*100;
console.log(bigMacIndexNorway.toFixed(2));

let sweedenBigMacPrice= 54.00;
let bigMacPPPSweeden=sweedenBigMacPrice / usBigMacPrice;
let actualExchangeRateSEKDollar = 8.72;
let bigMacIndexSweeden= (( bigMacPPPSweeden-actualExchangeRateSEKDollar ) /actualExchangeRateSEKDollar)*100;
console.log(bigMacIndexSweeden.toFixed(2));