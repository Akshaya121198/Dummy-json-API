import { NgModule } from '@angular/core';
import { CommonModule, NgForOf, NgIf } from '@angular/common';

import { PostsRoutingModule } from './posts-routing.module';
import { FormsModule } from '@angular/forms';
import { PostsService } from './posts.service';
import { PostComponent } from './post/post.component';
import { PostviewComponent } from './postview/postview.component';


@NgModule({
  declarations: [PostComponent, PostviewComponent],
  imports: [
    
    CommonModule,
    PostsRoutingModule,
    FormsModule, 
    NgForOf,
    NgIf
  ],
  providers:[
    PostsService,
  ]
})
export class PostsModule { }
