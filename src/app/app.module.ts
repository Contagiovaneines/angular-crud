import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Importando FormsModule
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FuncionarioListComponent } from './components/funcionario-list/funcionario-list.component';
import { FuncionarioFormComponent } from './components/funcionario-form/funcionario-form.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    FuncionarioListComponent,
    FuncionarioFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, // Adicionando FormsModule
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}