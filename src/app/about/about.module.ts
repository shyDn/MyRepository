import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about.component';
import { Routes, RouterModule} from '@angular/router';
import { AboutRoutes } from './about.router';


@NgModule({
  imports: [
    AboutRoutes,
    CommonModule,
  ],
  declarations: [
    AboutComponent
  ],
  exports: [ AboutComponent ]
})
export class AboutModule { }
