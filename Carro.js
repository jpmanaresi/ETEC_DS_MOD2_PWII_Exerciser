class Carro {
 #nome;
 #marca;
 #ano;
constructor(Motor, n, m, y) {
    this.motor = Motor;
    this.#nome = n;
    this.#marca = m;
    this.#ano = y;
}
    acelerar() {
        return this.motor.acelerar();
}
get nome() {
    console.log("get nome() {SUCESSO}");
    return this.#nome;
}
set nome(nome) {
    console.log("set nome() {SUCESSO}");
    this.#nome = nome;
}
get marca() {
    console.log("get marca() {SUCESSO}");
    return this.#marca;
}
set marca(marca) {
    console.log("set marca() {SUCESSO}");
    this.#marca = marca;
}
get ano() {
    console.log("get ano() {SUCESSO}");
    return this.#ano;
}
set ano(ano) {
    console.log("set ano() {SUCESSO}");
    this.#ano = ano;
}
};