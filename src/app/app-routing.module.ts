import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from "./about/about.component";
import { TaskComponent } from "./task/task.component";
import { ContactComponent } from "./contact/contact.component";


const routes: Routes = [
  {
    path: 'About', component: AboutComponent,
  },
  {
    path: 'Tasks', component: TaskComponent,
  },
  {
    path: 'Contact', component: ContactComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
