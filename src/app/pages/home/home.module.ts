import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import {RouterModule, Routes} from '@angular/router';
import { BrandModule } from '@components/home/brand/brand.module';
import { NewsModule } from '@components/home/news/news.module';
import { TopModule } from '@components/home/top/top.module';
import { LatestModule } from '@components/home/latest/latest.module';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  }
];



@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    BrandModule,
    NewsModule,
    TopModule,
    LatestModule
  ]
})
export class HomeModule { }
