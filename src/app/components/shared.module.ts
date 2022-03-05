import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { InputComponent } from './input/input.component';
import { ButtonComponent } from './button/button.component';
import { IconButtonComponent } from './icon-button/icon-button.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [InputComponent, ButtonComponent, IconButtonComponent],
  imports: [CommonModule, IonicModule, FormsModule, ReactiveFormsModule],
  exports: [InputComponent, ButtonComponent, IconButtonComponent],
})
export class SharedModule { }
