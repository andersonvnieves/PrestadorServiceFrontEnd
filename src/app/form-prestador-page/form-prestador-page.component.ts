import { Component, Inject, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Dialogdata } from 'src/model/DialogData';
import { Prestador } from 'src/model/Prestador';
import { PrestadorApiService } from '../prestador-api.service';
import { PrestadorPageComponent } from '../prestador-page/prestador-page.component';

@Component({
  selector: 'app-form-prestador-page',
  templateUrl: './form-prestador-page.component.html',
  styleUrls: ['./form-prestador-page.component.css']
})
export class FormPrestadorPageComponent implements OnInit {
  prestadorForm: FormGroup
  @Input() isCreate: boolean = true;
  dialogTitle: string ="";

  constructor(
    private dialogRef: MatDialogRef<FormPrestadorPageComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Dialogdata,
    private router: Router, 
    private formBuilder: FormBuilder,
    private snackBar: MatSnackBar,
    private prestadorApiService: PrestadorApiService
    ) {
      this.prestadorForm = this.formBuilder.group({
        prestadorId: [0],
        nomeCompleto: ['', [Validators.required]],
        dataNascimento: ['', [Validators.required]],
        rg: ['', [Validators.required]],
        cpf: ['', [Validators.required]],
        cnh: ['', [Validators.required]],
        validadeCNH: ['', [Validators.required]],
        email: ['', [Validators.required]],
        celular: ['', [Validators.required]],
      });
     }

     ngOnInit(): void {
      if(this.data.isCreate){
        this.dialogTitle = 'Cadastrar novo Prestador'
      }
      else {
        this.dialogTitle = 'Editar Prestsador'
  
        this.prestadorApiService.getPrestador(this.data.prestadorId).subscribe( result => {
         this.prestadorForm.setValue({
           prestadorId: result.prestadorId,
           nomeCompleto: result.nomeCompleto,
           dataNascimento: result.dataNascimento,
           rg: result.rg,
           cpf: result.cpf,
           cnh: result.cnh,
           validadeCNH: result.validadeCNH,
           email: result.email,
           celular: result.celular,
          })        
        }, error => {
          this.snackBar.open("Erro ao carregar prestador.", "OK", {
            duration: 2000,
          })
        }); 
  
      }
    }

    onSubmit(): void {
      if(this.prestadorForm.valid) {
        if(this.data.isCreate){
          this.prestadorApiService.postPrestador(this.prestadorForm.value).subscribe( result => {
            this.router.navigate(['TodosPrestadores']);
            this.dialogRef.close();
          }, error => {
            this.snackBar.open("Erro ao salvar Prestador.", "OK", {
              duration: 2000,
            })
          });      
        }
        else {        
          this.prestadorApiService.putPrestador(this.prestadorForm.value).subscribe( result => {
            this.router.navigate(['TodosPrestadores']);
            this.dialogRef.close();
          }, error => {
            this.snackBar.open("Erro ao atualizar Prestador.", "OK", {
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
