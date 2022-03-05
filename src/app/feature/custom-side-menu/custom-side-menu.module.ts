import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { CustomSideMenuComponent } from './custom-side-menu.component';
@NgModule({
    imports: [
        CommonModule,
        IonicModule.forRoot(),
        RouterModule
    ],
    declarations: [
        CustomSideMenuComponent
    ],
    exports: [
        CustomSideMenuComponent
    ],
    entryComponents: [],
})
export class CustomSideMenuModule {
}
