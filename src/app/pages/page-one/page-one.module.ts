import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { MyComponentPage } from './page-one.page';
import { PageOneRoutingModule } from './page-one-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PageOneRoutingModule
  ],
  declarations: [MyComponentPage]
})
export class MyComponentModule { }
