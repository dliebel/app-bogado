import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndexComponent } from './index/index.component';
import { ViewComponent } from './view/view.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { SkeletonComponent } from 'src/app/layout/skeleton/skeleton.component';


const routes: Routes = [
  { path: 'project', redirectTo: 'project/index', pathMatch: 'full'},
  // { path: 'project/index', component: IndexComponent },
  {
    path: 'project/index',
    component: SkeletonComponent,
    children: [
      { path: '', component: IndexComponent }
    ]
  },
  {
    path: 'project/:projectId/view',
    component: SkeletonComponent,
    children: [
      { path: '', component: ViewComponent }
    ]
  },
  {
    path: 'project/create',
    component: SkeletonComponent,
    children: [
      { path: '', component: CreateComponent }
    ]
  },
  {
    path: 'project/:projectId/edit',
    component: SkeletonComponent,
    children: [
      { path: '', component: EditComponent }
    ]
  },
 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectRoutingModule { }
