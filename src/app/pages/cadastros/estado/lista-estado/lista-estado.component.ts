import { Component } from '@angular/core';
import { Estado } from 'src/app/models/estado';
import { EstadoService } from 'src/app/services/estado.service';

@Component({
  selector: 'app-lista-estado',
  templateUrl: './lista-estado.component.html',
  styleUrls: ['./lista-estado.component.css']
})
export class ListaEstadoComponent {

  listaEstado!: Estado[];

  constructor(
    private estadoService: EstadoService) { }


  ngOnInit(): void {
    this.estadoService.listarTodos().subscribe(data => {
      this.listaEstado = data;
    });

  }

}
