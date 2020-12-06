import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { EnderecoApiService } from 'src/app/endereco-api.service';
import { Dialogdata } from 'src/model/DialogData';

@Component({
  selector: 'app-endereco-excluir-dialog',
  templateUrl: './endereco-excluir-dialog.component.html',
  styleUrls: ['./endereco-excluir-dialog.component.css']
})
export class EnderecoExcluirDialogComponent implements OnInit {

  dialogTitle: string = "Confirmar Exclusão de endereço"

  constructor(
    private dialogRef: MatDialogRef<EnderecoExcluirDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Dialogdata,
    private router: Router, 
    private formBuilder: FormBuilder,
    private snackBar: MatSnackBar,
    private enderecoApiService: EnderecoApiService
  ) { }

  ngOnInit(): void {
  }

  excluirClick(): void {
    this.enderecoApiService.deleteEndereco(this.data.enderecoId).subscribe( result => { });
    this.router.navigate(['TodosPrestadores']);
    this.snackBar.open("Endereço excluído com sucesso.", "OK", {
      duration: 2000,
    })
    this.dialogRef.close();    
  }
}
