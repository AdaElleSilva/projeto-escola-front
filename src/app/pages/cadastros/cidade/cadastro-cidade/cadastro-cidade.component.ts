import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { Cidade } from 'src/app/models/cidade';
import { ModoCadastro } from 'src/app/models/modo-cadastro.enum';
import { CidadeService } from 'src/app/services/cidade.service';

@Component({
  selector: 'app-cadastro-cidade',
  templateUrl: './cadastro-cidade.component.html',
  styleUrls: ['./cadastro-cidade.component.css']
})
export class CadastroCidadeComponent {
 
  formulario!: FormGroup;
  cidade!: Cidade;
  loading = false;
  idSelecionado!: string;
  modoCadastro: ModoCadastro = ModoCadastro.NOVO;

  constructor(
    private cidadeService: CidadeService,
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
    this.cidadeService.buscar(id).subscribe(data => {
      this.cidade = data;
      this.formulario.patchValue(data);
    })
  }


  criarFormulario() {
    this.formulario = this.formBuilder.group({
      cidade: ['', Validators.required],      
    });
  }

  onSalvar() {

    if (!this.formulario.valid) {
      return;
    }

    this.cidade = { ...this.cidade, ...this.formulario.getRawValue() };

    if (this.modoCadastro === ModoCadastro.NOVO) {


      this.cidadeService.adicionar(this.cidade).subscribe(() => {
        this.notification.create(
          'success',
          'Notificação',
          'Registro adicionado com sucesso!'
        );
        this.onVoltar();
      });

    } else {
      this.cidadeService.atualizar(this.idSelecionado, this.cidade).subscribe(() => {
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
    this.router.navigate(['/lista-cidade']);
  }

}
