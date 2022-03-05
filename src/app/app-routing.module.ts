import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  // {
  //   path: '',
  //   component: BlankLayoutPage,
  //   children: [

  //   ]
  // },
  // {
  //   path: '',
  //   component: FullLayoutPage,
  //   children: [

  //   ]
  // },
  {
    path: 'login',
    loadChildren: () => import('./screens/login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./screens/register/register.module').then(m => m.RegisterPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardPageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules, useHash: true, relativeLinkResolution: 'legacy' })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
