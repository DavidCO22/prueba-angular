import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DescargasComponent } from './descargas/descargas.component';

const routes: Routes = [{path:'descargas',component:DescargasComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
