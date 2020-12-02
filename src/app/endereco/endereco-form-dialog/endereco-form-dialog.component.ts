import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { PrestadorApiService } from 'src/app/prestador-api.service';

@Component({
  selector: 'app-endereco-form-dialog',
  templateUrl: './endereco-form-dialog.component.html',
  styleUrls: ['./endereco-form-dialog.component.css']
})
export class EnderecoFormDialogComponent implements OnInit {

  enderecoForm: FormGroup;
  @Input() isCreate: boolean = true;
  dialogTitle: string ="";

  constructor(
    private router: Router, 
    private formBuilder: FormBuilder,
    private snackBar: MatSnackBar,
    private prestadorApiService: PrestadorApiService
    ) { 
      this.enderecoForm = this.formBuilder.group({
        enderecoId: ['', [Validators.required]],
        logradouro: ['', [Validators.required]],
        numero: ['', [Validators.required]],
        bairro: ['', [Validators.required]],
        cep: ['', [Validators.required]],
        estado: ['', [Validators.required]],
        cidade: ['', [Validators.required]],
        complemento: [''],
      });
    }

  ngOnInit(): void {
    if(this.isCreate){
      this.dialogTitle = 'Cadastrar endereço'
    }
    else {
      this.dialogTitle = 'Editar endereço'
    }
  }

  onSubmit(): void {
    if(this.isCreate){
      
    }
    else {
      
    }
  }

}
