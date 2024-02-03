import { Disciplina } from "./disciplina";
import { HorarioAula } from "./horario-aula";
import { Pessoa } from "./pessoa";
import { Turma } from "./turma";


export class ProfessorTurma {
    id!: string;
    pessoa!: Pessoa;
    turma!: Turma;
    disciplina!: Disciplina;
    horarioAula!: HorarioAula;
}
