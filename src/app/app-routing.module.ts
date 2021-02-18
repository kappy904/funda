import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {DataComponent} from './components/data/data.component';
import {WelcomeComponent} from './components/welcome/welcome.component';

const routes: Routes = [
  {path: 'data', component: DataComponent},
  {path: 'welcome', component: WelcomeComponent},
  {path: '', redirectTo: '/welcome', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
