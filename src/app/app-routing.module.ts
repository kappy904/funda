import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { DetailsPageComponent } from './pages/details-page/details-page.component';

const routes: Routes = [
  // I chose to go with the Pages pattern as introduced in Nuxt/Next/Gatsby as it works for this SPA
  // If there were multiple I would go with lazy-loading ng modules
  { path: 'details', component: DetailsPageComponent },
  { path: 'welcome', component: WelcomeComponent },
  // This is only to ensure that you see my custom welcome page on local server start
  { path: '', redirectTo: '/welcome', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
