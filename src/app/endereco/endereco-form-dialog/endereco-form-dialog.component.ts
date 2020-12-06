import { Component, Inject, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { EnderecoApiService } from 'src/app/endereco-api.service';
import { PrestadorApiService } from 'src/app/prestador-api.service';
import { Dialogdata } from 'src/model/DialogData';

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
    private dialogRef: MatDialogRef<EnderecoFormDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Dialogdata,
    private router: Router, 
    private formBuilder: FormBuilder,
    private snackBar: MatSnackBar,
    private enderecoApiService: EnderecoApiService
    ) { 
      this.enderecoForm = this.formBuilder.group({
        enderecoId: [0],
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
      if(this.data.isCreate){
        this.dialogTitle = 'Cadastrar Endereço'
      }
      else {
        this.dialogTitle = 'Editar Endereço'
  
        this.enderecoApiService.getEndereco(this.data.enderecoId).subscribe( result => {
         this.enderecoForm.setValue({
            enderecoId: result.enderecoId,
            logradouro: result.logradouro,
            numero: result.numero,
            bairro: result.bairro,
            cep: result.cep,
            estado: result.estado,
            cidade: result.cidade,
            complemento: result.complemento,
          })        
        }, error => {
          this.snackBar.open("Erro ao carregar Endereço.", "OK", {
            duration: 2000,
          })
        }); 
  
      }
    }
  
    onSubmit(): void {
      if(this.enderecoForm.valid) {
        if(this.data.isCreate){
          this.enderecoApiService.postEndereco(this.enderecoForm.value, this.data.prestadorId).subscribe( result => {
            this.router.navigate(['TodosPrestadores']);
            this.dialogRef.close();
          }, error => {
            this.snackBar.open("Erro ao salvar Endereço.", "OK", {
              duration: 2000,
            })
          });      
        }
        else {        
          this.enderecoApiService.putEndereco(this.enderecoForm.value).subscribe( result => {
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
  