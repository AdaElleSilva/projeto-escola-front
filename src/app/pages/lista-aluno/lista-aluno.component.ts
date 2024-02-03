import { Component } from '@angular/core';
import { Aluno } from 'src/app/models/aluno';
import { AlunoService } from 'src/app/services/aluno.service';

@Component({
  selector: 'app-lista-aluno',
  templateUrl: './lista-aluno.component.html',
  styleUrls: ['./lista-aluno.component.css']
})
export class ListaAlunoComponent {


  listaAlunos!: Aluno[];

  constructor(
    private alunoService: AlunoService) { }


  ngOnInit(): void {
    this.alunoService.listarTodos().subscribe(data => {
      this.listaAlunos = data;
    });

  }

}
