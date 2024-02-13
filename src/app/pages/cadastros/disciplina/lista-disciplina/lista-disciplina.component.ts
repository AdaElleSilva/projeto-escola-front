import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NzModalService } from 'ng-zorro-antd/modal';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { Disciplina } from 'src/app/models/disciplina';
import { DisciplinaService } from 'src/app/services/disciplina.service';


@Component({
  selector: 'app-lista-disciplina',
  templateUrl: './lista-disciplina.component.html',
  styleUrls: ['./lista-disciplina.component.css']
})
export class ListaDisciplinaComponent {


  listaDisciplina!:Disciplina[];
  idRemocao!: string;
  numeroRegistros: number = 0;
  carregando = false;

  constructor(
    private disciplinaService: DisciplinaService,
    private router: Router,
    private modal: NzModalService,
    private notification: NzNotificationService
  ) { }

  
  ngOnInit(): void {
    this.onCarregar();
  }

  onNovo() {
    this.router.navigate(['cadastro-disciplina']);
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
    this.disciplinaService.deletar(this.idRemocao).subscribe(() => {
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
    this.disciplinaService.listarTodos().subscribe(data =>{
      this.listaDisciplina = data;
      this.numeroRegistros = this.listaDisciplina.length;
      this.carregando = false;
    });
  }

  onEditar(disciplina: Disciplina) {
    this.router.navigate(['/editar-disciplina/', disciplina.id]);    
  }

}
