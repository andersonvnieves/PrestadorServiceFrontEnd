import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { FormPrestadorPageComponent } from '../form-prestador-page/form-prestador-page.component';
import { PrestadorApiService } from '../prestador-api.service';

@Component({
  selector: 'app-prestador-page',
  templateUrl: './prestador-page.component.html',
  styleUrls: ['./prestador-page.component.css']
})
export class PrestadorPageComponent implements OnInit {

  pageTitle: string = "Prestadores Cadastrados";
  pageSubtitle:string = "Gerencie aqui os Prestadores cadastrados no sistema";

  constructor(private prestadorApiService: PrestadorApiService, public dialog: MatDialog ) { }

  ngOnInit(): void {
  }

  cadastrarPrestadorClick() {
    const dialogRef = this.dialog.open(FormPrestadorPageComponent, { data: {isCreate: true} });
    dialogRef.afterClosed().subscribe(result => { });
  }

}
