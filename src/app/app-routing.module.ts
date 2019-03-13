import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateFromAddressComponent } from './address/create-from-address.component';

const routes: Routes = [
  { path: 'create-from-address', component: CreateFromAddressComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
