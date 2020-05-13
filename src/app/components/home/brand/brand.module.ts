import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrandComponent } from './brand.component';



@NgModule({
  declarations: [BrandComponent],
  imports: [
    CommonModule
  ],
  exports: [ BrandComponent]
})
export class BrandModule { }
