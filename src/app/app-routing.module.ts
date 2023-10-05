import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './layout/index/index.component';
import { LoginComponent } from './sistema/login/login.component';
import { PessoaslistComponent } from './pessoas/pessoaslist/pessoaslist.component';
import { PessoasdetailsComponent } from './pessoas/pessoasdetails/pessoasdetails.component';
import { LivroslistComponent } from './livros/livroslist/livroslist.component';
import { CarroslistComponent } from './carros/carroslist/carroslist.component';
import { MenuComponent } from './menu/menu.component';

const routes: Routes = [
  {path: "", redirectTo:"login", pathMatch: 'full'},
  {path: "login", component: LoginComponent},
  {path:"menu", component: MenuComponent},
  {path: "admin", component: IndexComponent, children: [
    {path:"pessoas", component: PessoaslistComponent},
    {path: "carros", component: CarroslistComponent},
    {path: "livros", component: LivroslistComponent},
    {path:"pessoas/novo", component: PessoasdetailsComponent},
    {path:"pessoas/editar/:id", component: PessoasdetailsComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
