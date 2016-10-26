import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NoteComponent } from './note/note.component';
import { AboutUsComponent } from './shared/pages/about-us/about-us.component';
import { NotFoundComponent } from './shared/pages/not-found/not-found.component';
import { NoteDetailComponent } from './note-detail/note-detail.component';

const routes: Routes = [
  {
     path: '',
     component: NoteComponent,
     pathMatch: 'full'
   },
   {
       path: ':noteid',
       component: NoteDetailComponent
     },
   { path: 'about-us', component: AboutUsComponent },
   { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class Projectw051016RoutingModule { }
