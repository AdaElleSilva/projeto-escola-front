import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaDisciplinaComponent } from './pages/cadastros/disciplina/lista-disciplina/lista-disciplina.component';
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
import { CadastroAnoLetivoComponent } from './pages/cadastros/ano-letivo/cadastro-ano-letivo/cadastro-ano-letivo.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/welcome' },
  { path: 'lista-aluno', component: ListaAlunoComponent },
  { path: 'lista-ano-letivo', component: ListaAnoLetivoComponent },
  { path: 'cadastro-ano-letivo', component: CadastroAnoLetivoComponent },
  { path: 'lista-ano-serie', component: ListaAnoSerieComponent },
  { path: 'lista-cidade', component: ListaCidadeComponent },
  { path: 'lista-disciplina', component: ListaDisciplinaComponent },
  { path: 'lista-escola', component: ListaEscolaComponent },
  { path: 'lista-estado', component: ListaEstadoComponent },
  { path: 'lista-genero', component: ListaGeneroComponent },
  { path: 'lista-horario-aula', component: ListaHorarioAulaComponent },
  { path: 'lista-matricula', component: ListaMatriculaComponent },
  { path: 'lista-nota', component: ListaNotaComponent },
  { path: 'lista-periodo-aula', component: ListaPeriodoAulaComponent },
  { path: 'lista-pessoa', component: ListaPessoaComponent },
  { path: 'lista-presenca', component: ListaPresencaComponent },
  { path: 'lista-professor', component: ListaProfessorComponent },
  { path: 'lista-professor-turma', component: ListaProfessorTurmaComponent },
  { path: 'lista-turma', component: ListaTurmaComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
