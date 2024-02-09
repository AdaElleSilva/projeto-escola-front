import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NzModalService } from 'ng-zorro-antd/modal';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { AnoSerie } from 'src/app/models/ano-serie';
import { AnoSerieService } from 'src/app/services/ano-serie.service';

@Component({
  selector: 'app-lista-ano-serie',
  templateUrl: './lista-ano-serie.component.html',
  styleUrls: ['./lista-ano-serie.component.css']
})
export class ListaAnoSerieComponent {

  listaAnoSerie!:AnoSerie[];
  idRemocao!: string;
  numeroRegistros: number = 0;
  carregando = false;

  constructor(
    private anoSerieService: AnoSerieService,
    private router: Router,
    private modal: NzModalService,
    private notification: NzNotificationService
  ) { }

  
  ngOnInit(): void {
    this.onCarregar();
  }

  onNovo() {
    this.router.navigate(['cadastro-ano-serie']);
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
    this.anoSerieService.deletar(this.idRemocao).subscribe(() => {
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
    this.anoSerieService.listarTodos().subscribe(data =>{
      this.listaAnoSerie = data;
      this.numeroRegistros = this.listaAnoSerie.length;
      this.carregando = false;
    });
  }

  onEditar(anoSerie: AnoSerie) {
    this.router.navigate(['/editar-ano-serie/', anoSerie.id]);    
  }

}
