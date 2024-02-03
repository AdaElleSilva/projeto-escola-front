import { Component } from '@angular/core';
import { Pessoa } from 'src/app/models/pessoa';
import { PessoaService } from 'src/app/services/pessoa.service';

@Component({
  selector: 'app-lista-pessoa',
  templateUrl: './lista-pessoa.component.html',
  styleUrls: ['./lista-pessoa.component.css']
})
export class ListaPessoaComponent {

  listaPessoa!: Pessoa[];

  constructor(
    private pessoaService: PessoaService) { }


  ngOnInit(): void {
    this.pessoaService.listarTodos().subscribe(data => {
      this.listaPessoa = data;
    });

  }

}
