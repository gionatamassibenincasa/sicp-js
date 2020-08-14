function cubo(x) {
    return x * x * x;
}
function inc(n) {
    return n + 1;
}
function somma_cubi(a, b) {
    return somma(cubo, a, inc, b);
}
function somma(termine, a, prossimo, b) {
    return a > b
        ? 0
        : termine(a) + somma(termine, prossimo(a), prossimo, b);
}
