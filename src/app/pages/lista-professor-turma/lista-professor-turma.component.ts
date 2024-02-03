import { Component } from '@angular/core';
import { ProfessorTurma } from 'src/app/models/professor-turma';
import { ProfessorTurmaService } from 'src/app/services/professor-turma.service';

@Component({
  selector: 'app-lista-professor-turma',
  templateUrl: './lista-professor-turma.component.html',
  styleUrls: ['./lista-professor-turma.component.css']
})
export class ListaProfessorTurmaComponent {

  listaProfessorTurma!: ProfessorTurma[];

  constructor(
    private professorTurmaService: ProfessorTurmaService) { }


  ngOnInit(): void {
    this.professorTurmaService.listarTodos().subscribe(data => {
      this.listaProfessorTurma = data;
    });

  }

}
