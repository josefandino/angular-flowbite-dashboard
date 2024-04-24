import { Routes } from '@angular/router';
import DashboardComponent from './components/dashboard/dashboard.component';
import AuthComponent from './components/auth/auth.component';
import CrudComponent from './components/crud/crud.component';

export const routes: Routes = [
<<<<<<< HEAD
    { path: '', component: DashboardComponent },
    { path: 'auth', component: AuthComponent },
    { path: '**', redirectTo: '', pathMatch: 'full' }
=======
    {path:'', component:DashboardComponent},    
    {path:'auth', component:AuthComponent},
    {path:'crud', component:CrudComponent},    
    {path:'', redirectTo:'', pathMatch:'full'}
>>>>>>> 26c7be3be6e96a125250940bc7f155bf8866b91e
];
