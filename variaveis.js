let a = 40;
let b = 10;
let c = 20;
let total = 0;
let totalde = 0;
let x = 5;
total = ( a + b + c );
totalde = ( a + b + c ) / x;
console.log("o valor do total é:", total);
console.log("o valor do totalde é:", totalde); 
console.log(outraconta ());
console.log(media ());
console.log(carros ());
console.log(triangulo ());
console.log(array ());



// inicio da função
function outraconta(){
    var d = 10;
    var e = 20;
    var f = 30;
    var tot = 0; 
    var xx = 100;
    var totde = 0;
    tot = ( d + e + f );
    totde = ( d + e + f ) / xx;
    //console.log (" o valor de tot é:", tot); 
    //console.log (" o valor de totde é:", totde); 
    return tot;
    return totde;

 }




function media () {
    let nfinal = 0;
    n1 = 30;
    n2 = 90;
    n3 = 100;
    nfinal = ( n1 + n2 + n3 ) / 3;
    //console.log (" a media é", nfinal.toFixed(1));
    return nfinal.toFixed(1);
    }



    function carros () {
        carro1 = 'fusca';
        km1 = 100;
        p1 = 12,70;
        carro2 = "gol";
        km2 = 240;
        p2 = 180;
        console.log('o total do fusca é:', km1*p1);
        console.log('o total do gol é:', km2*p2);
    }

    function triangulo () {
        B=5;
        A=12;
        T=B*A/2
        console.log("o valor da área é:", T);
    }


    function array () {
        let frutas = ['maça', 'banana', 'laranja'];
console.log( frutas.length);
console.log(frutas);
frutas.push('manga');
console.log(frutas);
console.log(frutas.length);
frutas.pop();
frutas.pop();
console.log(frutas);
frutas.pop();
frutas.pop();
console.log(frutas);
frutas.push('uva');
frutas.push('amora');
frutas.push('michirica', 'abacate', 'abacaxi');
console.log(frutas);
console.log('a fruta na posição 1 é:', frutas[1]);
console.log(frutas.length);
console.log('o total de registros é de ', frutas.length+1, 'frutas.');
frutas.unshift('seereja');
console.log(frutas);
}
