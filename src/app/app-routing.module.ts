import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NewUserComponent } from './components/new-user/new-user.component';
import { AreaComponent } from './components/area/area.component';
import { NewAreaComponent } from './components/new-area/new-area.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';


const routes: Routes = [
  // ruta de home que en este caso es listado de usuarios
  { path: 'home', component: HomeComponent},
  //ruta de creacion de nuevo usuario
  { path: 'newUser', component: NewUserComponent},
  //ruta de listado de areas creadas
  { path: 'area', component: AreaComponent},
  //ruta de creacion de nuevas areas
  { path: 'newArea', component: NewAreaComponent},
  //ruta de dashboar
  { path: 'dashboard', component: DashboardComponent},
 // ruta predeterminada de inicio
  { path: '**', pathMatch:'full', redirectTo:'dashboard'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
