import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ShyComponent } from './shy/shy.component';

export const routes: Routes = [
  {
    path: 'shy',
    component: ShyComponent
  },
  {
    path: 'lazy-about',
    loadChildren: './about/about.module#AboutModule'
  },
  {
    path: 'lazy-info',
    loadChildren: './info/info.module#InfoModule'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    // AboutComponent,
    ShyComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
