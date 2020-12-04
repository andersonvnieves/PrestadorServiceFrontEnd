import { Component, Inject, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { DadosBancariosApiService } from 'src/app/dados-bancarios-api.service';
import { Dialogdata } from 'src/model/DialogData';

@Component({
  selector: 'app-dados-bancarios-form-dialog',
  templateUrl: './dados-bancarios-form-dialog.component.html',
  styleUrls: ['./dados-bancarios-form-dialog.component.css']
})
export class DadosBancariosFormDialogComponent implements OnInit {

  dadosBancariosForm: FormGroup;
  dialogTitle: string ="";
  
  constructor(
    private dialogRef: MatDialogRef<DadosBancariosFormDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Dialogdata,
    private router: Router, 
    private formBuilder: FormBuilder,
    private snackBar: MatSnackBar,
    private dadosBancariosApiService: DadosBancariosApiService
    ) { 
      this.dadosBancariosForm = this.formBuilder.group({
        dadosBancariosId: [0],
        banco: ['', [Validators.required]],
        agencia: ['', [Validators.required]],
        contaCorrente: ['', [Validators.required]]
      });
    }

  ngOnInit(): void {
    if(this.data.isCreate){
      this.dialogTitle = 'Cadastrar dados bancários'
    }
    else {
      this.dialogTitle = 'Editar dados bancários'

      this.dadosBancariosApiService.getDadosBancarios(this.data.dadosBancariosId).subscribe( result => {
       this.dadosBancariosForm.setValue({
          dadosBancariosId: result.dadosBancariosId,
          banco: result.banco,
          agencia: result.agencia,
          contaCorrente: result.contaCorrente
        })        
      }, error => {
        this.snackBar.open("Erro ao carregar Endereço.", "OK", {
          duration: 2000,
        })
      }); 

    }
  }

  onSubmit(): void {
    if(this.dadosBancariosForm.valid) {
      if(this.data.isCreate){
        this.dadosBancariosApiService.postDadosBancarios(this.dadosBancariosForm.value, this.data.prestadorId).subscribe( result => {
          this.router.navigate(['TodosPrestadores']);
          this.dialogRef.close();
        }, error => {
          this.snackBar.open("Erro ao salvar Endereço.", "OK", {
            duration: 2000,
          })
        });      
      }
      else {        
        this.dadosBancariosApiService.putDadosBancarios(this.dadosBancariosForm.value).subscribe( result => {
          this.router.navigate(['TodosPrestadores']);
          this.dialogRef.close();
        }, error => {
          this.snackBar.open("Erro ao atualizar Endereço.", "OK", {
            duration: 2000,
          })
        });
      }      
    }  
    else {
      this.snackBar.open("Preencha os dados corretamente.", "OK", {
        duration: 2000,
      })
    }   
  }
}
