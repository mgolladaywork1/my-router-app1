import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageNotFoundComponent } from './not-found.component';
import { DashboardComponent } from './dashboard/dashboard.component';
const appRoutes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/dashboard'},
  { path: 'dashboard', component: DashboardComponent },
  { path: '**', component:PageNotFoundComponent }
]

@NgModule({
  imports: [ RouterModule.forRoot(
    appRoutes,
    {
        enableTracing: true
    }
  )],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}