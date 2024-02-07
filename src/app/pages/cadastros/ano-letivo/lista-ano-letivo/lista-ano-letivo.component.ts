import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NzModalService } from 'ng-zorro-antd/modal';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { AnoLetivo } from 'src/app/models/ano-letivo';
import { AnoLetivoService } from 'src/app/services/ano-letivo.service';

@Component({
  selector: 'app-lista-ano-letivo',
  templateUrl: './lista-ano-letivo.component.html',
  styleUrls: ['./lista-ano-letivo.component.css']
})
export class ListaAnoLetivoComponent {
  
  listaAnoLetivo!:AnoLetivo[];
  idRemocao!: string;
  numeroRegistros: number = 0;
  carregando = false;

  constructor(
    private anoLetivoService: AnoLetivoService,
    private router: Router,
    private modal: NzModalService,
    private notification: NzNotificationService
  ) { }

  
  ngOnInit(): void {
    this.onCarregar();
  }

  onNovo() {
    this.router.navigate(['cadastro-ano-letivo']);
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
    this.anoLetivoService.deletar(this.idRemocao).subscribe(() => {
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
    this.anoLetivoService.listarTodos().subscribe(data =>{
      this.listaAnoLetivo = data;
      this.numeroRegistros = this.listaAnoLetivo.length;
      this.carregando = false;
    });
  }

  onEditar(anoLetivo: AnoLetivo) {
    this.router.navigate(['/editar-ano-letivo/', anoLetivo.id]);    
  }
}
