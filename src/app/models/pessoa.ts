import { Cidade } from "./cidade";
import { Estado } from "./estado";
import { Genero } from "./genero";
import { Perfil } from "./perfil";

export class Pessoa {
    id!: string;
    nome!: string;
    dataNascimento!: string; // ou outro tipo adequado para representar a data
    genero!: Genero;
    endereco!: string;
    bairro!: string;
    cidade!: Cidade;
    estado!: Estado;
    cep!: string;
    complemento!: string;
    telefone!: string;
    email!: string;
    nomeMae!: string;
    perfil!: Perfil;
}
