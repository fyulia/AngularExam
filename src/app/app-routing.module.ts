import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomepageComponent} from './homepage/homepage.component';
import {StudlistComponent} from './studlist/studlist.component';
import {EditoraddComponent} from './editoradd/editoradd.component';


const routes: Routes = [
  { path: '', component: HomepageComponent},
  { path: 'studlist', component: StudlistComponent},
  { path: 'editstud/:id', component: EditoraddComponent },
  {path: 'addstud',component: EditoraddComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
