import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { Estado } from 'src/app/models/estado';
import { ModoCadastro } from 'src/app/models/modo-cadastro.enum';
import { EstadoService } from 'src/app/services/estado.service';

@Component({
  selector: 'app-cadastro-estado',
  templateUrl: './cadastro-estado.component.html',
  styleUrls: ['./cadastro-estado.component.css']
})
export class CadastroEstadoComponent {
  
  formulario!: FormGroup;
  estado!: Estado;
  loading = false;
  idSelecionado!: string;
  modoCadastro: ModoCadastro = ModoCadastro.NOVO;

  constructor(
    private estadoService: EstadoService,
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private notification: NzNotificationService
  ) {

  }

  ngOnInit(): void {
    this.criarFormulario();
    this.route.params.subscribe(params => {

      if (params['id']) {
        this.modoCadastro = ModoCadastro.EDICAO;
        this.idSelecionado = params['id'];
        this.buscarCadastro(this.idSelecionado);
      }
    });
  }

  buscarCadastro(id: string) {
    this.estadoService.buscar(id).subscribe(data => {
      this.estado = data;
      this.formulario.patchValue(data);
    })
  }


  criarFormulario() {
    this.formulario = this.formBuilder.group({
      estado: ['', Validators.required],      
    });
  }

  onSalvar() {

    if (!this.formulario.valid) {
      return;
    }

    this.estado = { ...this.estado, ...this.formulario.getRawValue() };

    if (this.modoCadastro === ModoCadastro.NOVO) {


      this.estadoService.adicionar(this.estado).subscribe(() => {
        this.notification.create(
          'success',
          'Notificação',
          'Registro adicionado com sucesso!'
        );
        this.onVoltar();
      });

    } else {
      this.estadoService.atualizar(this.idSelecionado, this.estado).subscribe(() => {
        this.notification.create(
          'success',
          'Notificação',
          'Registro atualizado com sucesso!'
        );
        this.onVoltar();
      });
    }

  }

  onVoltar() {
    this.router.navigate(['/lista-estado']);
  }

}
