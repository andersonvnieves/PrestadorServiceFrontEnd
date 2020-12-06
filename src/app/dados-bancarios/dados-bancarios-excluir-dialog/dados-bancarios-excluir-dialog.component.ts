import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { DadosBancariosApiService } from 'src/app/dados-bancarios-api.service';
import { Dialogdata } from 'src/model/DialogData';

@Component({
  selector: 'app-dados-bancarios-excluir-dialog',
  templateUrl: './dados-bancarios-excluir-dialog.component.html',
  styleUrls: ['./dados-bancarios-excluir-dialog.component.css']
})
export class DadosBancariosExcluirDialogComponent implements OnInit {

  dialogTitle: string = "Confirmar Exclusão de dados bancários"
  constructor(
    private dialogRef: MatDialogRef<DadosBancariosExcluirDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Dialogdata,
    private router: Router, 
    private snackBar: MatSnackBar,
    private dadosBancariosApiService: DadosBancariosApiService
  ) { }

  ngOnInit(): void {
  }

  excluirClick(): void {
    this.dadosBancariosApiService.deleteDadosBancarios(this.data.dadosBancariosId).subscribe( result => { });
    this.router.navigate(['TodosPrestadores']);
      this.dialogRef.close();
      this.snackBar.open("Dados Bancários excluídos com sucesso.", "OK", {
        duration: 2000,
      })
      this.dialogRef.close();    
  }
}
