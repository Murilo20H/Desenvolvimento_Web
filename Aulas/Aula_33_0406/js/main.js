"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const gato_1 = __importDefault(require("./gato"));
let gato = new gato_1.default("Frajola", "Siamês", 2);
gato.comer();
console.log(`O gato ${gato.nome} é da raça ${gato.raca} e tem ${gato.idade} anos.`);
