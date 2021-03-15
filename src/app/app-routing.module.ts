import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HombresComponent } from './components/hombres/hombres.component';
import { HomeComponent } from './components/home/home.component';
import { MujeresComponent } from './components/mujeres/mujeres.component';
import { Page404Component } from './components/page404/page404.component';
import { PagosComponent } from './components/pagos/pagos.component';

const routes: Routes = [
  {path:'home', component: HomeComponent},
  {path:'hombres', component: HombresComponent},
  {path:'mujeres', component: MujeresComponent},
  {path:'pagos', component: PagosComponent},
  {path:'**', pathMatch:'full',component: Page404Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
