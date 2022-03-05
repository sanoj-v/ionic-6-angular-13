import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardPage } from './dashboard.page';

const routes: Routes = [
  {
    path: '',
    component: DashboardPage,
  },
  {
    path: 'page',
    loadChildren: () => import('../pages/page-one/page-one.module').then(m => m.MyComponentModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardPageRoutingModule { }
