import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FEED_ROUTE, USER_ROUTE } from '../containers';


const routes: Routes = [
    { path: '', redirectTo: `/${FEED_ROUTE.path}`, pathMatch: 'full' },
    FEED_ROUTE,
    USER_ROUTE,
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
