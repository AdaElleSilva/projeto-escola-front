import { Component } from '@angular/core';
import { Presenca } from 'src/app/models/presenca';
import { PresencaService } from 'src/app/services/presenca.service';

@Component({
  selector: 'app-lista-presenca',
  templateUrl: './lista-presenca.component.html',
  styleUrls: ['./lista-presenca.component.css']
})
export class ListaPresencaComponent {

  listaPresenca!: Presenca[];

  constructor(
    private presencaService: PresencaService) { }


  ngOnInit(): void {
    this.presencaService.listarTodos().subscribe(data => {
      this.listaPresenca = data;
    });

  }

}
