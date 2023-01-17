import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApplicationsPageComponent } from './applications/applications-page/applications-page.component';
import { ResourcesComponent } from './appResources/resources/resources.component';
import { CorePageComponent } from './core/core-page/core-page.component';
import { HomePageComponent } from './home/home-page/home-page.component';

const routes: Routes = [
  { path: 'home', component: HomePageComponent },
  { path: 'core', component: CorePageComponent },
  { path: 'applications', component: ApplicationsPageComponent },
  { path: 'resources', component: ResourcesComponent },
 
 {path: '**', component: HomePageComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
