import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FeedListComponent } from './components/feed-list/feed-list.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { HomeComponent } from './shared/home/home.component';



const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: '',
        component: FeedListComponent
      }
    ]
  },
  {
    // No matching path found
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
