import { Routes } from '@angular/router';

import { LoginComponent } from './pages/login/login.component';
import { NavegacionComponent } from './pages/navegacion/navegacion.component';
import { VentasComponent } from './pages/ventas/ventas.component';
import { AuthGuard } from './core/auth.guard';

export const routes: Routes = [
    {
        path:"",
        redirectTo: "home",
        pathMatch:"full"
    },
    {
        path:"login",
        component: LoginComponent
    },
    {
        path:"home",
        component: NavegacionComponent,
        canActivate: [AuthGuard]
    },
    {
        path:"ventas",
        component: VentasComponent,
        canActivate: [AuthGuard]
    },

];
