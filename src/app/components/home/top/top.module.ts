import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopComponent } from './top.component';
import { CardTopModule } from 'src/app/shared/UI/card-top/card-top.module';



@NgModule({
  declarations: [TopComponent],
  imports: [
    CommonModule,
    CardTopModule
/*     CardTopModule */
  ],
  exports: [TopComponent]
})
export class TopModule { }
