import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './pages/list/list.component';
import { WalletComponent } from './pages/wallet/wallet.component';

const routes: Routes = [{

  path: '',
  children: [
    { path: 'list', component: ListComponent },
    { path: 'wallet', component: WalletComponent },
    { path: 'wallet/editar/:id', component: WalletComponent },
    { path: '**', redirectTo: 'list' },
  ]

}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WalletRoutingModule { }
