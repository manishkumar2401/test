import { Routes } from '@angular/router';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { RegisterationFormComponent } from './components/registeration-form/registeration-form.component';
import { SearchFlightComponent } from './pages/search-flight/search-flight.component';

export const routes: Routes = [
  { path: 'list-page', component: ListPageComponent },
  { path: 'register-page', component: RegisterationFormComponent },
  { path: 'search-flight', component: SearchFlightComponent },
];
