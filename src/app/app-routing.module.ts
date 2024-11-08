import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FuncionarioListComponent } from './components/funcionario-list/funcionario-list.component';
import { FuncionarioFormComponent } from './components/funcionario-form/funcionario-form.component';

const routes: Routes = [
  { path: '', component: FuncionarioListComponent },  // Rota inicial
  { path: 'funcionario/new', component: FuncionarioFormComponent },  // Criar novo funcionário
  { path: 'funcionario/edit/:id', component: FuncionarioFormComponent }  // Editar funcionário
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
