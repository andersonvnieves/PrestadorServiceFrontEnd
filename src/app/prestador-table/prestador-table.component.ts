import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import { PrestadorApiService } from '../prestador-api.service';
import { Prestador } from 'src/model/Prestador';
import { MatDialog } from '@angular/material/dialog';
import { DadosBancariosFormDialogComponent } from '../dados-bancarios/dados-bancarios-form-dialog/dados-bancarios-form-dialog.component';
import { EnderecoFormDialogComponent } from '../endereco/endereco-form-dialog/endereco-form-dialog.component';
import { DadosBancariosExcluirDialogComponent } from '../dados-bancarios/dados-bancarios-excluir-dialog/dados-bancarios-excluir-dialog.component';
import { EnderecoExcluirDialogComponent } from '../endereco/endereco-excluir-dialog/endereco-excluir-dialog.component';
import { PrestadorExluirDialogComponent } from './prestador-exluir-dialog/prestador-exluir-dialog.component';
import { FormPrestadorPageComponent } from '../form-prestador-page/form-prestador-page.component';

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

  constructor(private prestadorApiService: PrestadorApiService, public dialog: MatDialog, public cdr: ChangeDetectorRef ) { }

  ngOnInit(): void {
    this.updateData();    
  }


  updateData() {
    this.prestadorApiService.getPrestadorList().subscribe((data) => { this.dataSource = data; });
    this.cdr.detectChanges();
  }
  

  openDadosBancariosFormDialog(isCreate: boolean, prestadorId : number, dadosBancariosId: number = 0) {
    const dialogRef = this.dialog.open(DadosBancariosFormDialogComponent, { data: {isCreate: isCreate, dadosBancariosId: dadosBancariosId, prestadorId: prestadorId} });
    dialogRef.afterClosed().subscribe(result => { });
    this.updateData();
  }

  openEnderecoFormDialog(isCreate: boolean, prestadorId : number, enderecoId: number = 0) {
    const dialogRef = this.dialog.open(EnderecoFormDialogComponent, { data: {isCreate: isCreate, enderecoId: enderecoId, prestadorId: prestadorId} });
    dialogRef.afterClosed().subscribe(result => { });
    this.updateData();
  }

  openDadosBancariosExcluirDialog(dadosBancariosId: number = 0) {
    const dialogRef = this.dialog.open(DadosBancariosExcluirDialogComponent, { data: {dadosBancariosId: dadosBancariosId} });
    dialogRef.afterClosed().subscribe(result => { });
    this.updateData();
  }

  openEnderecoExcluirDialog(enderecoId: number = 0) {
    const dialogRef = this.dialog.open(EnderecoExcluirDialogComponent, { data: {enderecoId: enderecoId} });
    dialogRef.afterClosed().subscribe(result => { });
    this.updateData();
  }

  openPrestadorFormDialog(prestadorId : number = 0) {
    const dialogRef = this.dialog.open(FormPrestadorPageComponent, { data: {isCreate: false, prestadorId: prestadorId} });
    dialogRef.afterClosed().subscribe(result => { });
    this.updateData();
  }
  openPrestadorExcluirDialog(prestadorId: number = 0) {
    const dialogRef = this.dialog.open(PrestadorExluirDialogComponent, { data: {prestadorId: prestadorId} });
    dialogRef.afterClosed().subscribe(result => { });
    this.updateData();
  }

}