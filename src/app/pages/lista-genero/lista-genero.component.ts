import { Component } from '@angular/core';
import { Genero } from 'src/app/models/genero';
import { GeneroService } from 'src/app/services/genero.service';

@Component({
  selector: 'app-lista-genero',
  templateUrl: './lista-genero.component.html',
  styleUrls: ['./lista-genero.component.css']
})
export class ListaGeneroComponent {

  listaGenero!: Genero[];

  constructor(
    private generoService: GeneroService) { }


  ngOnInit(): void {
    this.generoService.listarTodos().subscribe(data => {
      this.listaGenero = data;
    });

  }

}
