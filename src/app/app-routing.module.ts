import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShipmentFormComponent } from './shipment/shipment-form.component';

const routes: Routes = [
  { path: '', redirectTo: '/create-shipment', pathMatch: 'full' },
  { path: 'create-shipment', component: ShipmentFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
