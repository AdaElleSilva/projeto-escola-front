import { Component } from '@angular/core';
import { Nota } from 'src/app/models/nota';
import { NotaService } from 'src/app/services/nota.service';

@Component({
  selector: 'app-lista-nota',
  templateUrl: './lista-nota.component.html',
  styleUrls: ['./lista-nota.component.css']
})
export class ListaNotaComponent {

  listaNota!: Nota[];

  constructor(
    private notaService: NotaService) { }


  ngOnInit(): void {
    this.notaService.listarTodos().subscribe(data => {
      this.listaNota = data;
    });

  }

}
