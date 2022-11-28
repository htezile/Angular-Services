import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailComponent } from './components/detail/detail.component';
import { SearchComponent } from './components/search/search.component';

const routes: Routes = [
  { path: 'movies', component: SearchComponent },
  { path: 'detail/:id', component: DetailComponent },
  { path: '', pathMatch: 'full', redirectTo: 'movies' },
  { path: '**', pathMatch: 'full', redirectTo: 'movies' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
