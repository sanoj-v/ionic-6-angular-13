import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyComponentPage } from './page-one.page';
const routes: Routes = [
    {
        path: '',
        component: MyComponentPage
    }
];
@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class PageOneRoutingModule { }
