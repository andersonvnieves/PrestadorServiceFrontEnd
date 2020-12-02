import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { PrestadorApiService } from 'src/app/prestador-api.service';

@Component({
  selector: 'app-dados-bancarios-form-dialog',
  templateUrl: './dados-bancarios-form-dialog.component.html',
  styleUrls: ['./dados-bancarios-form-dialog.component.css']
})
export class DadosBancariosFormDialogComponent implements OnInit {

  dadosBancariosForm: FormGroup;
  @Input() isCreate: boolean = true;
  dialogTitle: string ="";
  
  constructor(
    private router: Router, 
    private formBuilder: FormBuilder,
    private snackBar: MatSnackBar,
    private prestadorApiService: PrestadorApiService
    ) { 
      this.dadosBancariosForm = this.formBuilder.group({
        dadosBancariosId: ['', [Validators.required]],
        banco: ['', [Validators.required]],
        agencia: ['', [Validators.required]],
        contaCorrente: ['', [Validators.required]]
      });
    }

  ngOnInit(): void {
    if(this.isCreate){
      this.dialogTitle = 'Cadastrar dados bancários'
    }
    else {
      this.dialogTitle = 'Editar dados bancários'
    }
  }

  onSubmit(): void {
    if(this.isCreate){
      
    }
    else {
      
    }
  }

  
}
