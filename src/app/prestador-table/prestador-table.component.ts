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

  dataSource = ELEMENT_DATA;
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



const ELEMENT_DATA: Prestador[] = [
  {
    prestadorId: 1,
    nomeCompleto: "Prestador Teste",
    dataNascimento: new Date("1970-11-29T00:00:00"),
    rg: "1155588899",
    cpf: "55588899966",
    cnh: "4585475874",
    validadeCNH: new Date("1970-11-29T00:00:00"),
    email: "user@example.com",
    celular: "11985257414",
    endereco: {
      enderecoId: 0,
      logradouro: "Avenida dos Autonomistas",
      numero: "455",
      bairro: "Centro",
      cep: "09090-190",
      estado: "SP",
      cidade: "Osasco",
      complemento: "string"
    },
    dadosBancarios: {
      dadosBancariosId: 0,
      banco: "Next",
      agencia: "8675",
      contaCorrente: "452588-5"
    }
  },
  {
    prestadorId: 2,
    nomeCompleto: "Imprestador",
    dataNascimento: new Date("1970-11-29T00:00:00"),
    rg: "1155588899",
    cpf: "55588899966",
    cnh: "4585475874",
    validadeCNH: new Date("1970-11-29T00:00:00"),
    email: "user@example.com",
    celular: "11985257414",
    endereco: {
      enderecoId: 0,
      logradouro: "Avenida dos Autonomistas",
      numero: "455",
      bairro: "Centro",
      cep: "09090-190",
      estado: "SP",
      cidade: "Osasco",
      complemento: ""
    },
    dadosBancarios: {
      dadosBancariosId: 0,
      banco: "Next",
      agencia: "8675",
      contaCorrente: "452588-5"
    }
  }
];
