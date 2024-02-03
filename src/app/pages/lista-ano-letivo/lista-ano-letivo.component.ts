import { Component } from '@angular/core';
import { AnoLetivo } from 'src/app/models/ano-letivo';
import { AnoLetivoService } from 'src/app/services/ano-letivo.service';

@Component({
  selector: 'app-lista-ano-letivo',
  templateUrl: './lista-ano-letivo.component.html',
  styleUrls: ['./lista-ano-letivo.component.css']
})
export class ListaAnoLetivoComponent {
  
  listaAnoLetivo!:AnoLetivo[];

  constructor(
private  anoLetivoService: AnoLetivoService) { }

  
  ngOnInit(): void {
    this.anoLetivoService.listarTodos().subscribe(data =>{
      this.listaAnoLetivo = data;
    });
  
  }
}
