import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'events', loadChildren: './events/events.module#EventsModule' },
  { path: 'resources', loadChildren: './resources/resources.module#ResourcesModule' },
  { path: 'scholarship', loadChildren: './scholarship/scholarship.module#ScholarshipModule' },
  { path: 'sponsors', loadChildren: './sponsors/sponsors.module#SponsorsModule' },
  { path: 'volunteers', loadChildren: './volunteers/volunteers.module#VolunteersModule' },
  { path: 'login', loadChildren: './login/login.module#LoginModule' },
  { path: 'logout', loadChildren: './logout/logout.module#LogoutModule' },
  { path: '', loadChildren: './home/home.module#HomeModule', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
