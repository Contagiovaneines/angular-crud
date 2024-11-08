import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Funcionario } from '../../models/funcionario.model';
import { FuncionarioService } from '../../services/funcionario.service';

@Component({
  selector: 'app-funcionario-form',
  templateUrl: './funcionario-form.component.html',
  styleUrls: ['./funcionario-form.component.css']
})
export class FuncionarioFormComponent implements OnInit {
  funcionario: Funcionario = { id: 0, nome: '', funcao: '', dataAdmissao: '', salario: 0 };
  editMode: boolean = false;

  constructor(
    private funcionarioService: FuncionarioService,
    public router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.editMode = true;
      const funcionarioId = Number(id);
      // Carregar dados do funcionário com base no ID
      this.funcionarioService.getFuncionarioById(funcionarioId).subscribe(funcionario => {
        this.funcionario = { ...funcionario };
      });
    }
  }

  salvarFuncionario(): void {
    if (this.editMode) {
      // Editar o funcionário existente
      this.funcionarioService.editarFuncionario(this.funcionario.id, this.funcionario).subscribe(() => {
        this.router.navigate(['/']);
      });
    } else {
      // Adicionar um novo funcionário
      this.funcionarioService.addFuncionario(this.funcionario).subscribe(() => {
        this.router.navigate(['/']);
      });
    }
  }
}
