import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-prestador-page',
  templateUrl: './prestador-page.component.html',
  styleUrls: ['./prestador-page.component.css']
})
export class PrestadorPageComponent implements OnInit {

  pageTitle: string = "Prestadores Cadastrados";
  pageSubtitle:string = "Gerencie aqui os Prestadores cadastrados no sistema";

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  cadastrarPrestadorClick() {
    this.router.navigate(['NovoPrestador']);
  }

}
