import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './pages/list/list.component';
import { CoinsComponent } from './pages/coins/coins.component';

const routes: Routes = [{
  path: '',
  children: [
    { path: 'coin', component: CoinsComponent },
    { path: 'coin/editar/:id', component: CoinsComponent },
    { path: 'list', component: ListComponent },
    { path: '**', redirectTo: 'list' }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoinsRoutingModule { }
