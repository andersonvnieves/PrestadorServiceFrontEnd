import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Prestador } from 'src/model/Prestador';
import { PrestadorApiService } from '../prestador-api.service';
import { PrestadorPageComponent } from '../prestador-page/prestador-page.component';

@Component({
  selector: 'app-form-prestador-page',
  templateUrl: './form-prestador-page.component.html',
  styleUrls: ['./form-prestador-page.component.css']
})
export class FormPrestadorPageComponent implements OnInit {

  pageTitle: string = "Cadastrar Novo Prestador";
  prestadorForm: FormGroup

  constructor(
    private router: Router, 
    private formBuilder: FormBuilder,
    private snackBar: MatSnackBar,
    private prestadorApiService: PrestadorApiService
    ) {
      this.prestadorForm = this.formBuilder.group({
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
    
  }

  cancelarBtnClick(e: any){
    this.router.navigate(['TodosPrestadores']);
  }

  onSubmit(){
    if(this.prestadorForm.valid){
      this.prestadorApiService.postPrestador(this.prestadorForm.value).subscribe( result => {
        this.router.navigate(['TodosPrestadores']);
      }, error => {
        this.snackBar.open("Erro ao salvar Prestador.", "OK", {
          duration: 2000,
        })
      });
    }  
  }
}
