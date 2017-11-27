import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageNotFoundComponent } from './not-found.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DocumentComponent } from './document/document.component';
import { DocumentsComponent } from './document/documents.component';
import { IndividualsComponent } from './individual/individuals.component';
const appRoutes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/dashboard'},
  { path: ':folder',
    children: [
      { path: '',
      component: DocumentsComponent
      },
      { path: ':id',
        component: DocumentComponent,
        children: [
          { path: 'individual', component: IndividualsComponent},
          { path: 'individual/:id', component: IndividualsComponent}
        ]
      }
    ]
  },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'message', component: IndividualsComponent, outlet:'second'},
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