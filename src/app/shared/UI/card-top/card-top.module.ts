import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardTopComponent } from './card-top.component';



@NgModule({
  declarations: [CardTopComponent],
  imports: [
    CommonModule
  ],
  exports: [CardTopModule]
})
export class CardTopModule { }
