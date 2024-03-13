import {Routes} from '@angular/router';
import {LoginComponent} from './auth/login/login.component';
import {DashboardComponent} from './pages/dashboard/dashboard.component';
import {EventComponent} from './pages/events/event/event.component';
import {UpdateEventComponent} from './pages/events/update-event/update-event.component';


export const routes: Routes = [
  {
  path: '',
  component: LoginComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'evento/:id',
    component: EventComponent
  },
  {
    path: 'evento/edit/:id',
    component: UpdateEventComponent
  },
];
