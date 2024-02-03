import { Component } from '@angular/core';
import { Turma } from 'src/app/models/turma';
import { TurmaService } from 'src/app/services/turma.service';

@Component({
  selector: 'app-lista-turma',
  templateUrl: './lista-turma.component.html',
  styleUrls: ['./lista-turma.component.css']
})
export class ListaTurmaComponent {

  listaTurma!: Turma[];

  constructor(
    private turmaService: TurmaService) { }


  ngOnInit(): void {
    this.turmaService.listarTodos().subscribe(data => {
      this.listaTurma = data;
    });

  }


}
