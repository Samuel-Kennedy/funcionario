import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CadastrarService } from '../service/cadastrar.service';

@Component({
  selector: 'app-cadastrar-usuario',
  templateUrl: './cadastrar-usuario.component.html',
  styleUrls: ['./cadastrar-usuario.component.css']
})
export class CadastrarUsuarioComponent {
  cadastroForm: FormGroup;

  constructor(private fb: FormBuilder, private cadastroService: CadastrarService) {
    this.cadastroForm = this.fb.group({
      nome: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required, Validators.minLength(6)]],
      confirmarSenha: ['', [Validators.required]]
    });
  }

  onSubmit(): void {
    if (this.cadastroForm.valid) {
      const usuario = this.cadastroForm.value;

      // Remova o campo 'confirmarSenha' antes de enviar para o backend
      delete usuario.confirmarSenha;

      this.cadastroService.salvarUsuario(usuario).subscribe(
        (response) => {
          console.log('Usuário salvo com sucesso!', response);
          alert('Usuário cadastrado com sucesso!');
        },
        (error) => {
          console.error('Erro ao salvar o usuário:', error);
          alert('Erro ao cadastrar usuário. Tente novamente.');
        }
      );
    } else {
      alert('Preencha todos os campos corretamente antes de enviar.');
    }
  }
}
