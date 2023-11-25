import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListagemAlunosComponent } from './views/alunos/listagem-alunos/listagem-alunos.component';
import { CadastroAlunosComponent } from './views/alunos/cadastro-alunos/cadastro-alunos.component';

@NgModule({
  declarations: [
    AppComponent,
    ListagemAlunosComponent,
    CadastroAlunosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
