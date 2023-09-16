import { NgModule } from '@angular/core';
import type { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { ComplexFormComponent } from './components/complex-form/complex-form.component';

const routes: Routes = [
  {
    path: '',
    component: ComplexFormComponent,
    data: {name: 'complex-form'}
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComplexFormRoutingModule {}
