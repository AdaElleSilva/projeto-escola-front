import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { AnoLetivo } from 'src/app/models/ano-letivo';
import { ModoCadastro } from 'src/app/models/modo-cadastro.enum';
import { AnoLetivoService } from 'src/app/services/ano-letivo.service';

@Component({
  selector: 'app-cadastro-ano-letivo',
  templateUrl: './cadastro-ano-letivo.component.html',
  styleUrls: ['./cadastro-ano-letivo.component.css']
})

export class CadastroAnoLetivoComponent {

  formulario!: FormGroup;
  anoLetivo!: AnoLetivo;
  loading = false;
  idSelecionado!: string;
  modoCadastro: ModoCadastro = ModoCadastro.NOVO;

  constructor(
    private anoLetivoService: AnoLetivoService,
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
    this.anoLetivoService.buscar(id).subscribe(data => {
      this.anoLetivo = data;
      this.formulario.patchValue(data);
    })
  }


  criarFormulario() {
    this.formulario = this.formBuilder.group({
      ano: ['', Validators.required],      
    });
  }

  onSalvar() {

    if (!this.formulario.valid) {
      return;
    }

    this.anoLetivo = { ...this.anoLetivo, ...this.formulario.getRawValue() };

    if (this.modoCadastro === ModoCadastro.NOVO) {


      this.anoLetivoService.adicionar(this.anoLetivo).subscribe(() => {
        this.notification.create(
          'success',
          'Notificação',
          'Registro adicionado com sucesso!'
        );
        this.onVoltar();
      });

    } else {
      this.anoLetivoService.atualizar(this.idSelecionado, this.anoLetivo).subscribe(() => {
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
    this.router.navigate(['/lista-ano-letivo']);
  }

  
}
