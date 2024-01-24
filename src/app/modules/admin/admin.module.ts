import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { TransectionComponent } from './components/transection/transection.component';
import { SettingComponent } from './components/setting/setting.component';


@NgModule({
  declarations: [
    AdminDashboardComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    TransectionComponent,
    SettingComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
  ]
})
export class AdminModule { }
