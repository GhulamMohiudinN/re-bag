import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { TransectionComponent } from './components/transection/transection.component';
import { SettingComponent } from './components/setting/setting.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {path:'', component:AdminDashboardComponent,
  children: [
    {path:'transection', component:TransectionComponent},
    {path:'setting', component:SettingComponent},
    {path:'home', component:HomeComponent},
    {path:'', redirectTo:'/admin/home', pathMatch: 'full'}
  ],
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
