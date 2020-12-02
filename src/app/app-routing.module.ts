import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormPrestadorPageComponent } from './form-prestador-page/form-prestador-page.component';
import { PrestadorPageComponent } from './prestador-page/prestador-page.component';

const routes: Routes = [
  {path: '', component: PrestadorPageComponent},
  {path: 'TodosPrestadores', component: PrestadorPageComponent},
  {path: 'NovoPrestador', component: FormPrestadorPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
