import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { AnoSerie } from 'src/app/models/ano-serie';
import { ModoCadastro } from 'src/app/models/modo-cadastro.enum';
import { AnoSerieService } from 'src/app/services/ano-serie.service';

@Component({
  selector: 'app-cadastro-ano-serie',
  templateUrl: './cadastro-ano-serie.component.html',
  styleUrls: ['./cadastro-ano-serie.component.css']
})
export class CadastroAnoSerieComponent {

  formulario!: FormGroup;
  anoSerie!: AnoSerie;
  loading = false;
  idSelecionado!: string;
  modoCadastro: ModoCadastro = ModoCadastro.NOVO;

  constructor(
    private anoSerieService: AnoSerieService,
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
    this.anoSerieService.buscar(id).subscribe(data => {
      this.anoSerie = data;
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

    this.anoSerie = { ...this.anoSerie, ...this.formulario.getRawValue() };

    if (this.modoCadastro === ModoCadastro.NOVO) {


      this.anoSerieService.adicionar(this.anoSerie).subscribe(() => {
        this.notification.create(
          'success',
          'Notificação',
          'Registro adicionado com sucesso!'
        );
        this.onVoltar();
      });

    } else {
      this.anoSerieService.atualizar(this.idSelecionado, this.anoSerie).subscribe(() => {
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
    this.router.navigate(['/lista-ano-serie']);
  }

}
