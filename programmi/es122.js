const {
    performance
} = require('perf_hooks');

function test_primalita_temporizzata(n) {
    display(n);
    return inizia_test_primalita(n, get_time());
}
function inizia_test_primalita(n, tempo_inizio) {
    return primo(n)
        ? stampa_primo(get_time() - tempo_inizio)
        : false;
}
function stampa_primo(tempo_trascorso) {
    display(" *** ");
    display("Calcolato in: " + tempo_trascorso + " ms");
    return tempo_trascorso;
}

function get_time() {
    //    return Math.round(new Date().getTime() / 1000);
    //    return Math.round(new Date().getTime());
    return performance.now();
}
function display(arg) {
    console.log(arg);
    return arg;
}

function divisore_minimo(n) {
    return cerca_divisore(n, 2);
}

function cerca_divisore(n, divisore_prova) {
    return quadrato(divisore_prova) > n
        ? n
        : divide(divisore_prova, n)
            ? divisore_prova
            : cerca_divisore(n, divisore_prova + 1);
}

function divide(a, b) {
    return b % a === 0;
}

function quadrato(x) {
    return x * x;
}

function primo(n) {
    return n === divisore_minimo(n);
}

function cerca_primi(inizio, primi_mancanti) {
    return primi_mancanti === 0
        ? tempo_parziale
        : inizio > 2 && inizio % 2 === 0
            ? cerca_primi(inizio + 1, primi_mancanti)
            // if we get undefined -> its a prime
            : test_primalita_temporizzata(inizio)
                ? cerca_primi(inizio + 2, primi_mancanti - 1)
                : cerca_primi(inizio + 2, primi_mancanti);
}

cerca_primi(1000, 30);
cerca_primi(10000, 30);
cerca_primi(100000, 30);
cerca_primi(1000000, 30);
cerca_primi(10000000, 30);
cerca_primi(100000000, 30);