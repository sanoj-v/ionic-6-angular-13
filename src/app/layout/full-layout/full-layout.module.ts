import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { FullLayoutPage } from './full-layout.page';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  declarations: [FullLayoutPage],
  exports: [FullLayoutPage]
})
export class FullLayoutPageModule {}
