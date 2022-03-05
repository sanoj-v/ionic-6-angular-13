import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { BlankLayoutPage } from './blank-layout.page';
import { RouterModule } from '@angular/router';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  declarations: [BlankLayoutPage],
  exports: [BlankLayoutPage]
})
export class BlankLayoutPageModule { }
