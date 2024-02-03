import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaDisciplinaComponent } from './pages/lista-disciplina/lista-disciplina.component';
import { ListaAnoLetivoComponent } from './pages/lista-ano-letivo/lista-ano-letivo.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/welcome' },
  { path: 'lista-disciplina', component: ListaDisciplinaComponent },
  { path: 'lista-ano-letivo', component: ListaAnoLetivoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
