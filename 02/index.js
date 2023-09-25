const express = require("express");

const rota2 = express();

let contando = false;
let min = 0, seg = 0;
let setIntervaDisparado = false;

function iniciarCronometro() {
    contando = true;

    if (!setIntervaDisparado) {
        setInterval(() => {
            if (contando) {
                if (seg === 59) {
                    seg = 0;
                    min++;
                } else {
                    seg++;
                }
            }
        }, 1000);

        setIntervaDisparado = true;
    }
}

rota2.get("/", (request, response) => {
    return response.send(`Tempo atual do cronômetro: ${min.toString().padStart(2, "0")} minutos e ${seg.toString().padStart(2, "0")} segundos`);
});

rota2.get("/iniciar", (request, response) => {
    iniciarCronometro();
    return response.send("Cronometro Iniciado");
});

rota2.get("/pausar", (request, response) => {
    contando = false;
    return response.send("Cronometro Pausado");
});

rota2.get("/continuar", (request, response) => {
    contando = true;
    return response.send("Cronometro Continua Contando");
});

rota2.get("/zerar", (request, response) => {
    min = 0;
    seg = 0;
    return response.send("Cronometro Zerado");
});

rota2.listen(8000);
