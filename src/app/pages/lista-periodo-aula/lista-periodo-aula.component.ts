import { Component } from '@angular/core';
import { PeriodoAula } from 'src/app/models/periodo-aula';
import { PeriodoAulaService } from 'src/app/services/periodo-aula.service';

@Component({
  selector: 'app-lista-periodo-aula',
  templateUrl: './lista-periodo-aula.component.html',
  styleUrls: ['./lista-periodo-aula.component.css']
})
export class ListaPeriodoAulaComponent {

  listaPeriodoAula!: PeriodoAula[];

  constructor(
    private periodoAulaService: PeriodoAulaService) { }


  ngOnInit(): void {
    this.periodoAulaService.listarTodos().subscribe(data => {
      this.listaPeriodoAula = data;
    });

  }

}
