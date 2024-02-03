import { PeriodoAula } from "./periodo-aula";
import { TurnoEscolar } from "./turno-escola";

export class HorarioAula {
    id!: string;
    turnoEscolar!: TurnoEscolar;
    periodoAula!: PeriodoAula;
}
