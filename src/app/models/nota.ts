import { Aluno } from "./aluno";
import { Turma } from "./turma";


export class Nota {
    id!: number;
    nota_1!: number;
    nota_2!: number;
    media!: number;
    aluno!: Aluno;
    turma!: Turma;
}
