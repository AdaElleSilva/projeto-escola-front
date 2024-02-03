import { Component } from '@angular/core';
import { Escola } from 'src/app/models/escola';
import { EscolaService } from 'src/app/services/escola.service';

@Component({
  selector: 'app-lista-escola',
  templateUrl: './lista-escola.component.html',
  styleUrls: ['./lista-escola.component.css']
})
export class ListaEscolaComponent {

  listaEscola!: Escola[];

  constructor(
    private escolaService: EscolaService) { }


  ngOnInit(): void {
    this.escolaService.listarTodos().subscribe(data => {
      this.listaEscola = data;
    });

  }

}
