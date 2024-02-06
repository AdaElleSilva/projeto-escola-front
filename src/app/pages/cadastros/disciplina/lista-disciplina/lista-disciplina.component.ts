import { Component } from '@angular/core';
import { Disciplina } from 'src/app/models/disciplina';
import { DisciplinaService } from 'src/app/services/disciplina.service';


@Component({
  selector: 'app-lista-disciplina',
  templateUrl: './lista-disciplina.component.html',
  styleUrls: ['./lista-disciplina.component.css']
})
export class ListaDisciplinaComponent {

  disciplinas!:Disciplina[];

  constructor(
private  disciplinaService: DisciplinaService) { }

  
  ngOnInit(): void {
    this.disciplinaService.listarTodos().subscribe(data =>{
      this.disciplinas = data;
    });
  
  }

}
