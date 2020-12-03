import { Component, OnInit } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import { PrestadorApiService } from '../prestador-api.service';
import { Prestador } from 'src/model/Prestador';
import { MatDialog } from '@angular/material/dialog';
import { DadosBancariosFormDialogComponent } from '../dados-bancarios/dados-bancarios-form-dialog/dados-bancarios-form-dialog.component';
import { EnderecoFormDialogComponent } from '../endereco/endereco-form-dialog/endereco-form-dialog.component';

@Component({
  selector: 'app-prestador-table',
  templateUrl: './prestador-table.component.html',
  styleUrls: ['./prestador-table.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class PrestadorTableComponent implements OnInit {

  dataSource: any;
  columnsToDisplay = ['nomeCompleto', 'email', 'celular'];
  expandedElement: Prestador | null | undefined;

  constructor(private prestadorApiService: PrestadorApiService, public dialog: MatDialog
    ) { }

  ngOnInit(): void {
    this.prestadorApiService.getPrestadorList().subscribe((data) => { this.dataSource = data; });
    
  }

  openDadosBancariosFormDialog() {
    const dialogRef = this.dialog.open(DadosBancariosFormDialogComponent);
    dialogRef.afterClosed().subscribe(result => { });
  }

  openEnderecoFormDialog() {
    const dialogRef = this.dialog.open(EnderecoFormDialogComponent);
    dialogRef.afterClosed().subscribe(result => { });
  }

}