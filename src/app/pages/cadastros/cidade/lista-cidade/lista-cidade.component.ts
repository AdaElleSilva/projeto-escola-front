import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NzModalService } from 'ng-zorro-antd/modal';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { Cidade } from 'src/app/models/cidade';
import { CidadeService } from 'src/app/services/cidade.service';

@Component({
  selector: 'app-lista-cidade',
  templateUrl: './lista-cidade.component.html',
  styleUrls: ['./lista-cidade.component.css']
})
export class ListaCidadeComponent {


  listaCidade!:Cidade[];
  idRemocao!: string;
  numeroRegistros: number = 0;
  carregando = false;

  constructor(
    private cidadeService: CidadeService,
    private router: Router,
    private modal: NzModalService,
    private notification: NzNotificationService
  ) { }

  
  ngOnInit(): void {
    this.onCarregar();
  }

  onNovo() {
    this.router.navigate(['cadastro-cidade']);
  }

  onModalDeletar(id:string){
    this.idRemocao = id;
    this.modal.confirm({
      nzTitle: 'Confirmação de exclusão',
      nzContent: '<b style="color: red;">Tem certeza que deseja excluir?</b>',
      nzOkText: 'Sim',
      nzOkType: 'primary',
      nzOkDanger: true,
      nzOnOk: () => this.onDeletar(),
      nzCancelText: 'Não',
      nzOnCancel: () => console.log('Cancel')
    });
  }

  onDeletar(){
    this.cidadeService.deletar(this.idRemocao).subscribe(() => {
      this.onCarregar();

      this.notification.create(
        'success',
        'Notificação',
        'Registro deletado com sucesso!'
      );

    });
  }

  onCarregar(){
    this.carregando = true;
    this.cidadeService.listarTodos().subscribe(data =>{
      this.listaCidade = data;
      this.numeroRegistros = this.listaCidade.length;
      this.carregando = false;
    });
  }

  onEditar(cidade: Cidade) {
    this.router.navigate(['/editar-cidade/', cidade.id]);    
  }

}
