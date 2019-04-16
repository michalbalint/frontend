import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from "@angular/router";
import { LoginComponent} from "./login/login.component";
import { ScheduleComponent} from "./schedule/schedule.component";


const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'schedule', component: ScheduleComponent},
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
