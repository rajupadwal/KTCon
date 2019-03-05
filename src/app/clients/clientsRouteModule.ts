import { NgModule } from '@angular/core';
import {
  Routes,
  RouterModule
} from '@angular/router';

import { ClientsComponent } from './clients.component';

const routes: Routes = [
  {
    path: '',
    component: ClientsComponent,
    data: {
      title: 'Clients'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientsRouteModule { }
