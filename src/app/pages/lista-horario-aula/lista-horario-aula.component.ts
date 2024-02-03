import { Component } from '@angular/core';
import { HorarioAula } from 'src/app/models/horario-aula';
import { HorarioAulaService } from 'src/app/services/horario-aula.service';

@Component({
  selector: 'app-lista-horario-aula',
  templateUrl: './lista-horario-aula.component.html',
  styleUrls: ['./lista-horario-aula.component.css']
})
export class ListaHorarioAulaComponent {

  listaHorarioAula!: HorarioAula[];

  constructor(
    private horarioAulaService: HorarioAulaService) { }


  ngOnInit(): void {
    this.horarioAulaService.listarTodos().subscribe(data => {
      this.listaHorarioAula = data;
    });

  }

}
