import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MojrozvrhComponent} from './component/mojrozvrh/mojrozvrh.component';
import {HomeComponent} from './component/home/home.component';
import {FilterprofesorComponent} from './component/filterprofesor/filterprofesor.component';
import {FiltercisloucebneComponent} from './component/filtercisloucebne/filtercisloucebne.component';

const routes: Routes = [
  {path: 'mojrozvrh', component: MojrozvrhComponent},
  {path: 'home', component: HomeComponent},
  {path: 'filterprofesor', component: FilterprofesorComponent},
  {path: 'filtercisloucebne', component: FiltercisloucebneComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

