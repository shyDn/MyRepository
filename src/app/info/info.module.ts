import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoComponent } from './info.component';
import { Routes, RouterModule} from '@angular/router';
import { InfoRoutes } from './info.router';
import { DropdownModule } from '@cb/cb-vdl/dropdown';


@NgModule({
  imports: [
    InfoRoutes,
    CommonModule,
    DropdownModule
  ],
  declarations: [
    InfoComponent
  ],
  exports: [ InfoComponent ]
})
export class InfoModule { }
