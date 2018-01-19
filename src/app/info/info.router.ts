import { Routes, RouterModule } from '@angular/router';
import { InfoComponent } from './info.component';

const routes: Routes = [
  {
    path: 'info', component: InfoComponent
  }
];

export const InfoRoutes = RouterModule.forChild(routes);
