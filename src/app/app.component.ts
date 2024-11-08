import { Component } from '@angular/core';
import { FuncionarioListComponent } from './components/funcionario-list/funcionario-list.component';
import { FuncionarioFormComponent } from './components/funcionario-form/funcionario-form.component';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DatePipe]

})
export class AppComponent {
  title = 'angular-crud';
  showFuncionarioList: boolean = true;  // Controla qual componente mostrar
  showFuncionarioForm: boolean = false;  // Controla qual componente mostrar

  // Método para exibir a lista de funcionários
  showList() {
    this.showFuncionarioList = true;
    this.showFuncionarioForm = false;
  }

  // Método para exibir o formulário
  showForm() {
    this.showFuncionarioList = false;
    this.showFuncionarioForm = true;
  }
}
