import { NgModule } from '@angular/core';
import type { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'social-media',
    loadChildren: () =>
      import('./social-media/social-media.module').then(
        (m) => m.SocialMediaModule
      ),
    data: { name: 'social-media' },
  },
  {
    path: 'complex-form',
    loadChildren: () =>
      import('./complex-form/complex-form.module').then(
        (m) => m.ComplexFormModule
      ),
    data: { name: 'complex-form' },
  },
  {
    path: 'candidates',
    loadChildren: () =>
      import('./reactive-state/reactive-state.module').then(
        (m) => m.ReactiveStateModule
      ),
    data: { name: 'candidates' },
  },
  {
    path: '**',
    redirectTo: 'social-media',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
