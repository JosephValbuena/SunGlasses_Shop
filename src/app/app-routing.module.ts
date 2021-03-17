import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NoticiasComponent } from './components/noticias/noticias.component';
import { NuevosComponent } from './components/nuevos/nuevos.component';
import { Page404Component } from './components/page404/page404.component';
import { PagosComponent } from './components/pagos/pagos.component';
import { TendenciasComponent } from './components/tendencias/tendencias.component';

const routes: Routes = [
  {path:'home', component: HomeComponent},
  {path:'tendencias', component: TendenciasComponent },
  {path:'nuevos',component: NuevosComponent},
  {path:'pagos', component: PagosComponent},      
  {path:'noticias', component: NoticiasComponent},
  {path:'**', pathMatch:'full',component: Page404Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
