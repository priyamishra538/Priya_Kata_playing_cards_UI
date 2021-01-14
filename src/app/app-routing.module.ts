import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DrawCardComponent } from './draw-card/draw-card.component';


const routes: Routes = [
  { path: '', component:  DrawCardComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
