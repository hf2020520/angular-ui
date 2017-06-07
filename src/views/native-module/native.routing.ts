import { Routes } from '@angular/router';

import { NavComponent } from './components/nav.component';

export const routes: Routes = [{
    path: '',
    component: NavComponent,
    children: []
}];