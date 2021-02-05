import { Routes } from "@angular/router";
import { DetallesComponent } from "../ingreso-egreso/detalles/detalles.component";
import { EstadisticasComponent } from "../ingreso-egreso/estadisticas/estadisticas.component";
import { IngresoEgresoComponent } from "../ingreso-egreso/ingreso-egreso.component";

export const dashboardRoutes: Routes = [
    { path: '', component: EstadisticasComponent },
    { path: 'ingreso-egreso', component: IngresoEgresoComponent },
    { path: 'detalle', component: DetallesComponent }
];