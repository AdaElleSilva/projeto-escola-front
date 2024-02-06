import { Component } from '@angular/core';
import { Cidade } from 'src/app/models/cidade';
import { CidadeService } from 'src/app/services/cidade.service';

@Component({
  selector: 'app-lista-cidade',
  templateUrl: './lista-cidade.component.html',
  styleUrls: ['./lista-cidade.component.css']
})
export class ListaCidadeComponent {

  listaCidade!: Cidade[];

  constructor(
    private cidadeService: CidadeService) { }


  ngOnInit(): void {
    this.cidadeService.listarTodos().subscribe(data => {
      this.listaCidade = data;
    });

  }

}
