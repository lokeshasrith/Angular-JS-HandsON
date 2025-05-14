import { AsyncPipe, CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReversePipe } from './reverse.pipe';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes), CommonModule, AsyncPipe, ReversePipe],
  exports: [RouterModule]
})
export class AppRoutingModule { }

