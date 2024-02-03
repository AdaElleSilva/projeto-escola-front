import { AnoLetivo } from "./ano-letivo";
import { MatriculaSituacao } from "./matricula-situacao";
import { Pessoa } from "./pessoa";
import { Turma } from "./turma";

export class Matricula {
    id!: string;
    pessoa!: Pessoa;
    dataMatricula!: string;
    matriculaSituacao!: MatriculaSituacao;
    anoLetivo!: AnoLetivo;
    turma!: Turma;
}
