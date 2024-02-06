import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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
  idSelecionado!: number;
  modoCadastro: ModoCadastro = ModoCadastro.NOVO;

  constructor(
    private anoLetivoService: AnoLetivoService,
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ) {

  }

  ngOnInit(): void {
    this.criarFormulario();
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
        this.onVoltar();
      });

    } else {
      this.anoLetivoService.atualizar(this.idSelecionado, this.anoLetivo).subscribe(() => {
        this.onVoltar();
      });
    }

  }

  onVoltar() {
    this.router.navigate(['/lista-ano-letivo']);
  }

  
}
