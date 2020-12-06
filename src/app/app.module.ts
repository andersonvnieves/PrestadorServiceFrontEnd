import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import {MatInputModule} from '@angular/material/input';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatDividerModule} from '@angular/material/divider';
import {MatDialogModule} from '@angular/material/dialog';


import { PrestadorTableComponent } from './prestador-table/prestador-table.component';
import { PrestadorPageComponent } from './prestador-page/prestador-page.component';
import { FormPrestadorPageComponent } from './form-prestador-page/form-prestador-page.component';
import { MatNativeDateModule } from '@angular/material/core';
import { EnderecoFormDialogComponent } from './endereco/endereco-form-dialog/endereco-form-dialog.component';
import { EnderecoExcluirDialogComponent } from './endereco/endereco-excluir-dialog/endereco-excluir-dialog.component';
import { DadosBancariosFormDialogComponent } from './dados-bancarios/dados-bancarios-form-dialog/dados-bancarios-form-dialog.component';
import { DadosBancariosExcluirDialogComponent } from './dados-bancarios/dados-bancarios-excluir-dialog/dados-bancarios-excluir-dialog.component';
import { PrestadorExluirDialogComponent } from './prestador-table/prestador-exluir-dialog/prestador-exluir-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    PrestadorTableComponent,
    PrestadorPageComponent,
    FormPrestadorPageComponent,
    EnderecoFormDialogComponent,
    EnderecoExcluirDialogComponent,
    DadosBancariosFormDialogComponent,
    DadosBancariosExcluirDialogComponent,
    PrestadorExluirDialogComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatListModule,
    MatInputModule,
    MatSnackBarModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatDividerModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
