const express = require("express");
//importa o arquivo 

const rota = express();

const jogadores = ["José", "Maria", "João", "Marcos", "Fernanda"];
let nomeDoJogador = "";
let i = 0;

rota.get("/", (request, response) => {
    nomeDoJogador = jogadores[i];
    i++;

    if (i >= jogadores.length) {
        i = 0;
    }

    return response.send(`É a vez de ${nomeDoJogador} jogar!`);
});

rota.listen(3000);