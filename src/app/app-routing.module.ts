import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailsPageComponent } from './pages/details-page/details-page.component';

const routes: Routes = [
  // I chose to go with the Pages pattern as introduced in Nuxt/Next/Gatsby as it works for this SPA
  // If there were multiple I would go with lazy-loading ng modules
  { path: 'details', component: DetailsPageComponent },
  { path: '', redirectTo: '/details', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
