import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PotalRoutingModule } from './potal-routing.module';
import { PotalComponent } from './potal.component';
import { HomeComponent } from './home/home.component';
import { HazopComponent } from './hazop/hazop.component';
import { WhatIfComponent } from './what-if/what-if.component';
import { TasksComponent } from './tasks/tasks.component';
import { SearchComponent } from './search/search.component';
import { JseaComponent } from './jsea/jsea.component';
import { HraComponent } from './hra/hra.component';
import { LayoutComponent } from './layouts/layout/layout.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { MatStepperModule } from '@angular/material/stepper';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatIconModule } from '@angular/material/icon'
import { MatDividerModule } from '@angular/material/divider';
import {MatTableModule} from '@angular/material/table';

@NgModule({
  declarations: [
    PotalComponent,
    HomeComponent,
    HazopComponent,
    WhatIfComponent,
    TasksComponent,
    SearchComponent,
    JseaComponent,
    HraComponent,
    LayoutComponent,
    NavbarComponent,
    FooterComponent,
    HeaderComponent,
    
  ],
  imports: [
    CommonModule,
    PotalRoutingModule,
    MatStepperModule,
    ReactiveFormsModule,
    SharedModule,
    MatIconModule,
    MatDividerModule,
    MatTableModule
  ]
})
export class PotalModule { }
