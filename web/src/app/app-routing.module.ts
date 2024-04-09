import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./modules/potal/potal.module').then(m => m.PotalModule) }, 
  { path: 'potal', loadChildren: () => import('./modules/potal/potal.module').then(m => m.PotalModule) }, 
  { path: 'master', loadChildren: () => import('./modules/master/master.module').then(m => m.MasterModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
