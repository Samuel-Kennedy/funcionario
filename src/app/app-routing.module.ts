import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarFuncionariosComponent } from './listar-funcionarios/listar-funcionarios.component';
import { CadastrarUsuarioComponent } from './cadastro/cadastrar-usuario/cadastrar-usuario.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: CadastrarUsuarioComponent },
  { path: 'funcionario', component: ListarFuncionariosComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
