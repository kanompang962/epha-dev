import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PotalComponent } from './potal.component';
import { HazopComponent } from './hazop/hazop.component';
import { JseaComponent } from './jsea/jsea.component';
import { WhatIfComponent } from './what-if/what-if.component';
import { SearchComponent } from './search/search.component';
import { HraComponent } from './hra/hra.component';
import { TasksComponent } from './tasks/tasks.component';
import { HomeComponent } from './home/home.component';
import { LayoutComponent } from './layouts/layout/layout.component';

const routes: Routes = [
  { path: '', component: PotalComponent, 
    children: [
      { path: 'hazop', component: HazopComponent },
      { path: 'jsea', component: JseaComponent },
      { path: 'whatif', component: WhatIfComponent },
      { path: 'search', component: SearchComponent },
      { path: 'hra', component: HraComponent },
      { path: 'tasks', component: TasksComponent },
      { path: 'home', component: HomeComponent },
      { path: '', component: HomeComponent },
    ] 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PotalRoutingModule { }
