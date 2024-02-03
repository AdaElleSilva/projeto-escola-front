import { Component } from '@angular/core';
import { Matricula } from 'src/app/models/matricula';
import { MatriculaService } from 'src/app/services/matricula.service';

@Component({
  selector: 'app-lista-matricula',
  templateUrl: './lista-matricula.component.html',
  styleUrls: ['./lista-matricula.component.css']
})
export class ListaMatriculaComponent {

  listaMatricula!: Matricula[];

  constructor(
    private matriculaService: MatriculaService) { }


  ngOnInit(): void {
    this.matriculaService.listarTodos().subscribe(data => {
      this.listaMatricula = data;
    });

  }

}
