import { Component } from '@angular/core';
import { AnoSerie } from 'src/app/models/ano-serie';
import { AnoSerieService } from 'src/app/services/ano-serie.service';

@Component({
  selector: 'app-lista-ano-serie',
  templateUrl: './lista-ano-serie.component.html',
  styleUrls: ['./lista-ano-serie.component.css']
})
export class ListaAnoSerieComponent {


  listaAnoSerie!: AnoSerie[];

  constructor(
    private anoSerieService: AnoSerieService) { }


  ngOnInit(): void {
    this.anoSerieService.listarTodos().subscribe(data => {
      this.listaAnoSerie = data;
    });

  }

}
