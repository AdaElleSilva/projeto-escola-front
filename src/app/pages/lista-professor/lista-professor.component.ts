import { Component } from '@angular/core';
import { Professor } from 'src/app/models/professor';
import { ProfessorService } from 'src/app/services/professor.service';

@Component({
  selector: 'app-lista-professor',
  templateUrl: './lista-professor.component.html',
  styleUrls: ['./lista-professor.component.css']
})
export class ListaProfessorComponent {

  listaProfessor!: Professor[];

  constructor(
    private professorService: ProfessorService) { }


  ngOnInit(): void {
    this.professorService.listarTodos().subscribe(data => {
      this.listaProfessor = data;
    });

  }

}
