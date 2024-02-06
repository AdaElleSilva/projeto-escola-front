import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IconsProviderModule } from './icons-provider.module';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { pt_PT } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import pt from '@angular/common/locales/pt';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { ListaDisciplinaComponent } from './pages/cadastros/disciplina/lista-disciplina/lista-disciplina.component';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { ListaAnoLetivoComponent } from './pages/cadastros/ano-letivo/lista-ano-letivo/lista-ano-letivo.component';
import { ListaAlunoComponent } from './pages/lista-aluno/lista-aluno.component';
import { ListaAnoSerieComponent } from './pages/cadastros/ano-serie/lista-ano-serie/lista-ano-serie.component';
import { ListaCidadeComponent } from './pages/cadastros/cidade/lista-cidade/lista-cidade.component';
import { ListaEscolaComponent } from './pages/lista-escola/lista-escola.component';
import { ListaEstadoComponent } from './pages/cadastros/estado/lista-estado/lista-estado.component';
import { ListaGeneroComponent } from './pages/cadastros/genero/lista-genero/lista-genero.component';
import { ListaHorarioAulaComponent } from './pages/lista-horario-aula/lista-horario-aula.component';
import { ListaMatriculaComponent } from './pages/lista-matricula/lista-matricula.component';
import { ListaNotaComponent } from './pages/lista-nota/lista-nota.component';
import { ListaPeriodoAulaComponent } from './pages/cadastros/periodo-aula/lista-periodo-aula/lista-periodo-aula.component';
import { ListaPessoaComponent } from './pages/lista-pessoa/lista-pessoa.component';
import { ListaPresencaComponent } from './pages/lista-presenca/lista-presenca.component';
import { ListaProfessorComponent } from './pages/lista-professor/lista-professor.component';
import { ListaProfessorTurmaComponent } from './pages/lista-professor-turma/lista-professor-turma.component';
import { ListaTurmaComponent } from './pages/lista-turma/lista-turma.component';
import { AnoLetivo } from './models/ano-letivo';
import { CadastroAnoLetivoComponent } from './pages/cadastros/ano-letivo/cadastro-ano-letivo/cadastro-ano-letivo.component';
import { CadastroAnoSerieComponent } from './pages/cadastros/ano-serie/cadastro-ano-serie/cadastro-ano-serie.component';
import { CadastroCidadeComponent } from './pages/cadastros/cidade/cadastro-cidade/cadastro-cidade.component';
import { CadastroDisciplinaComponent } from './pages/cadastros/disciplina/cadastro-disciplina/cadastro-disciplina.component';
import { CadastroEstadoComponent } from './pages/cadastros/estado/cadastro-estado/cadastro-estado.component';
import { CadastroGeneroComponent } from './pages/cadastros/genero/cadastro-genero/cadastro-genero.component';
import { CadastroPeriodoAulaComponent } from './pages/cadastros/periodo-aula/cadastro-periodo-aula/cadastro-periodo-aula.component';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NzFormModule } from 'ng-zorro-antd/form';


registerLocaleData(pt);

@NgModule({
  declarations: [
    AppComponent, 
    ListaAlunoComponent,
    ListaAnoLetivoComponent,
    ListaAnoSerieComponent,
    ListaCidadeComponent,
    ListaDisciplinaComponent,
    ListaEscolaComponent,
    ListaEstadoComponent,
    ListaGeneroComponent,
    ListaHorarioAulaComponent,
    ListaMatriculaComponent,
    ListaNotaComponent,
    ListaPeriodoAulaComponent,
    ListaPessoaComponent,
    ListaPresencaComponent,
    ListaProfessorComponent,
    ListaProfessorTurmaComponent,
    ListaTurmaComponent,
    CadastroAnoLetivoComponent,
    CadastroAnoSerieComponent,
    CadastroCidadeComponent,
    CadastroDisciplinaComponent,
    CadastroEstadoComponent,
    CadastroGeneroComponent,
    CadastroPeriodoAulaComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IconsProviderModule,
    NzLayoutModule,
    NzMenuModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzButtonModule,
    NzTableModule,
    NzDividerModule,
    NzPageHeaderModule,
    NzSwitchModule,
    NzSpinModule,
    ReactiveFormsModule,
    NzFormModule
  ],
  providers: [
    { provide: NZ_I18N, useValue: pt_PT }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
