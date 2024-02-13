import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NzModalService } from 'ng-zorro-antd/modal';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { PeriodoAula } from 'src/app/models/periodo-aula';
import { PeriodoAulaService } from 'src/app/services/periodo-aula.service';

@Component({
  selector: 'app-lista-periodo-aula',
  templateUrl: './lista-periodo-aula.component.html',
  styleUrls: ['./lista-periodo-aula.component.css']
})
export class ListaPeriodoAulaComponent {


  listaPeriodoAula!:PeriodoAula[];
  idRemocao!: string;
  numeroRegistros: number = 0;
  carregando = false;

  constructor(
    private periodoAulaService: PeriodoAulaService,
    private router: Router,
    private modal: NzModalService,
    private notification: NzNotificationService
  ) { }

  
  ngOnInit(): void {
    this.onCarregar();
  }

  onNovo() {
    this.router.navigate(['cadastro-periodo-aula']);
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
    this.periodoAulaService.deletar(this.idRemocao).subscribe(() => {
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
    this.periodoAulaService.listarTodos().subscribe(data =>{
      this.listaPeriodoAula = data;
      this.numeroRegistros = this.listaPeriodoAula.length;
      this.carregando = false;
    });
  }

  onEditar(periodoAula: PeriodoAula) {
    this.router.navigate(['/editar-periodo-aula/', periodoAula.id]);    
  }

}
