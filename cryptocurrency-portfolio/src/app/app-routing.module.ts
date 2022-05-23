import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path:'coins', loadChildren: () => import('./coins/coins.module').then(m => m.CoinsModule)},
  { path:'wallet', loadChildren: () => import('./wallet/wallet.module').then(m => m.WalletModule)},
  { path: '**', redirectTo: 'coins'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
