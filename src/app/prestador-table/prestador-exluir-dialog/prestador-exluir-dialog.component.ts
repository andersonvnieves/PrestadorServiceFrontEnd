import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { PrestadorApiService } from 'src/app/prestador-api.service';
import { Dialogdata } from 'src/model/DialogData';

@Component({
  selector: 'app-prestador-exluir-dialog',
  templateUrl: './prestador-exluir-dialog.component.html',
  styleUrls: ['./prestador-exluir-dialog.component.css']
})
export class PrestadorExluirDialogComponent implements OnInit {

  dialogTitle: string = "Confirmar Exclusão de Prestador"
  constructor(
    private dialogRef: MatDialogRef<PrestadorExluirDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Dialogdata,
    private router: Router, 
    private snackBar: MatSnackBar,
    private prestadorApiService: PrestadorApiService
  ) { }

  ngOnInit(): void {
  }

  excluirClick(): void {
    this.prestadorApiService.deletePrestador(this.data.prestadorId).subscribe( result => { });
    this.router.navigate(['TodosPrestadores']);
    this.snackBar.open("Prestador excluído com sucesso.", "OK", {
      duration: 2000,
    })
    this.dialogRef.close();    
  }
}