import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaDisciplinaComponent } from './pages/lista-disciplina/lista-disciplina.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/welcome' },
  { path: 'lista-disciplina', component: ListaDisciplinaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
