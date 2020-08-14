let primiTrovati = 0;
let primiTestFermat = 0;
let a = 100000;
const b = 200000;

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

function primo(n) {
    return n === divisore_minimo(n);
}

function pari(n) {
    return n % 2 === 0;
}

function quadrato(x) { return x * x }

function potenza_modulo(base, esponente, m) {
    return esponente === 0
        ? 1
        : pari(esponente)
            ? quadrato(potenza_modulo(base, esponente / 2, m)) % m
            : (base * potenza_modulo(base, esponente - 1, m)) % m;

}

function random(n) {
    return Math.floor(Math.random() * n);
}

function test_fermat(n) {
    function prova(a) {
        return potenza_modulo(a, n, n) === a;
    }
    return prova(1 + random(n - 1));
}

function primo_veloce(n, num_volte) {
    return num_volte === 0
        ? true
        : test_fermat(n)
            ? primo_veloce(n, num_volte - 1)
            : false;
}

for (; a < b; a++) {
    let p = false;
    if (primo(a)) {
        primiTrovati++;
        //console.log("Primo", a, primiTrovati);
        p = true;
    }
    if (primo_veloce(a, 100)) {
        primiTestFermat++;
        if (!p)
            console.log("Supera test Fermat ma non primo", a);
    }
}
