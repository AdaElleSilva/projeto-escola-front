import { Aluno } from "./aluno";
import { Turma } from "./turma";


export class Presenca {
    id!: number;
    aluno!: Aluno;
    registro!: string;
    turma!: Turma;
}
