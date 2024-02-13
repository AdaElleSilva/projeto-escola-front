import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { Disciplina } from 'src/app/models/disciplina';
import { ModoCadastro } from 'src/app/models/modo-cadastro.enum';
import { DisciplinaService } from 'src/app/services/disciplina.service';


@Component({
  selector: 'app-cadastro-disciplina',
  templateUrl: './cadastro-disciplina.component.html',
  styleUrls: ['./cadastro-disciplina.component.css']
})
export class CadastroDisciplinaComponent {
 
  formulario!: FormGroup;
  disciplina!: Disciplina;
  loading = false;
  idSelecionado!: string;
  modoCadastro: ModoCadastro = ModoCadastro.NOVO;

  constructor(
    private disciplinaService: DisciplinaService,
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
    this.disciplinaService.buscar(id).subscribe(data => {
      this.disciplina = data;
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

    this.disciplina = { ...this.disciplina, ...this.formulario.getRawValue() };

    if (this.modoCadastro === ModoCadastro.NOVO) {


      this.disciplinaService.adicionar(this.disciplina).subscribe(() => {
        this.notification.create(
          'success',
          'Notificação',
          'Registro adicionado com sucesso!'
        );
        this.onVoltar();
      });

    } else {
      this.disciplinaService.atualizar(this.idSelecionado, this.disciplina).subscribe(() => {
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
    this.router.navigate(['/lista-disciplina']);
  }
}
