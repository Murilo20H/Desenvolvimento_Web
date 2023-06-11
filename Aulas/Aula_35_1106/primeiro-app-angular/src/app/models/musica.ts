export default class Musica {
    id: string;
    cantor: string; 
    nome: string;
    tempoDuracao: number;
    album: string;
    genero: string;

    constructor(id: string, cantor: string, nome: string, tempoDuracao: number, album: string, genero: string) {
        this.id = id;
        this.cantor = cantor;
        this.nome = nome;
        this.tempoDuracao = tempoDuracao;
        this.album = album;
        this.genero = genero;
    }
}