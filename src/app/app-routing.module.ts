import { NgModule } from '@angular/core';
import { PreloadAllModules, Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component'
import { HelloComponent } from './hello.component'
import { DashboardComponent } from './app.dashboard'

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: "helloworld" },
  { path: 'helloworld', component: HelloComponent },
  { path: 'dashboard', component: DashboardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule],
})
export class AppRoutingModule { }
