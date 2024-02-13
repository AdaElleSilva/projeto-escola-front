import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { ModoCadastro } from 'src/app/models/modo-cadastro.enum';
import { PeriodoAula } from 'src/app/models/periodo-aula';
import { PeriodoAulaService } from 'src/app/services/periodo-aula.service';

@Component({
  selector: 'app-cadastro-periodo-aula',
  templateUrl: './cadastro-periodo-aula.component.html',
  styleUrls: ['./cadastro-periodo-aula.component.css']
})
export class CadastroPeriodoAulaComponent {
 
  formulario!: FormGroup;
  periodoAula!: PeriodoAula;
  loading = false;
  idSelecionado!: string;
  modoCadastro: ModoCadastro = ModoCadastro.NOVO;

  constructor(
    private periodoAulaService: PeriodoAulaService,
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
    this.periodoAulaService.buscar(id).subscribe(data => {
      this.periodoAula = data;
      this.formulario.patchValue(data);
    })
  }


  criarFormulario() {
    this.formulario = this.formBuilder.group({
      nome: ['', Validators.required],      
    });
  }

  onSalvar() {

    if (!this.formulario.valid) {
      return;
    }

    this.periodoAula = { ...this.periodoAula, ...this.formulario.getRawValue() };

    if (this.modoCadastro === ModoCadastro.NOVO) {


      this.periodoAulaService.adicionar(this.periodoAula).subscribe(() => {
        this.notification.create(
          'success',
          'Notificação',
          'Registro adicionado com sucesso!'
        );
        this.onVoltar();
      });

    } else {
      this.periodoAulaService.atualizar(this.idSelecionado, this.periodoAula).subscribe(() => {
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
    this.router.navigate(['/lista-periodo-aula']);
  }
}
