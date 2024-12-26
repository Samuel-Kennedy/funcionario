import { Component, OnInit } from '@angular/core';
import { ListarFuncionariosService } from './service/listar-funcionarios.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-listar-funcionarios',
  templateUrl: './listar-funcionarios.component.html',
  styleUrls: ['./listar-funcionarios.component.css']
})
export class ListarFuncionariosComponent implements OnInit {
  displayedColumns: string[] = [
    'ID',
    'NOME_FUNCIONARIO',
    'GESTOR',
    'SALARIO_FUNCIONARIO',
    'FLG_ATIVO'
  ]; // Define a ordem das colunas
  funcionariosValor: any = []; // Inicializa a fonte de dados da tabela

  constructor(private http: HttpClient, private recebe: ListarFuncionariosService) { }

  ngOnInit() {
    this.recebe.getFuncionarios().subscribe(
      (data) => {
        console.log('Dados recebidos:', data);
        this.funcionariosValor = data; // Atribui os dados à tabela
      },
      (error) => {
        console.error('Erro ao buscar dados:', error);
      }
    );
  }
}
