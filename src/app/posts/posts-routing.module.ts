import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostComponent } from './post/post.component';
import { PostviewComponent } from '../postview/postview.component';

const routes: Routes = [
  {path: "post", component: PostComponent },
  {path: "posts/:routes", component: PostviewComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostsRoutingModule { }
