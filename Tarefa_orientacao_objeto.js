



function Onibus(fabricante,rodas,assentos,anoFabricacao) {

    this.fabricante = fabricante;
    this.rodas = rodas;
    this.assentos = assentos;
    this.anoFabricacao = anoFabricacao;
}


function urbano (fabricante, rodas,assentos,anoFabricacao,pe, distanciaMaxima){

    Onibus.call(this, fabricante, rodas, assentos,anoFabricacao);

    this.pe = pe;
    this.distanciaMaxima = distanciaMaxima
}


function viagem (fabricante, rodas,assentos,anoFabricacao,semi, distanciaMaxima) {
    
    Onibus.call(this, fabricante, rodas, assentos,anoFabricacao )

    this.semi = semi
    this.distanciaMaxima = distanciaMaxima
}


function luxo (fabricante, rodas,assentos,anoFabricacao,leito,distanciaMaxima ) {

    Onibus.call(this, fabricante, rodas, assentos,anoFabricacao)

    this.leito = leito
    this.distanciaMaxima = distanciaMaxima
}


const onibusUrbano = new urbano ("Mercedes", 8, 50, 2005, "Com suporte para viagem com pessoas em pé", 500000)
console.log(onibusUrbano);


const onibusViagem = new viagem ("Marcopollo", 12, 42, 2010, "Com semi-leito", 250000);
console.log(onibusViagem);


const onibusLuxo = new luxo ("Mercedes",16, 32, 2020, "Com leito completo", 200000);
console.log(onibusLuxo);

