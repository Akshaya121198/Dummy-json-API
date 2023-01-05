// import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute } from '@angular/router';
// import { IPosts } from '../post/IPosts';
// import { PostsService } from '../posts.service';

// @Component({
//   selector: 'app-postview',
//   templateUrl: './postview.component.html',
//   styleUrls: ['./postview.component.css']
// })
// export class PostviewComponent implements OnInit {
//   id: number = 0;
//   routes: string = "";
//   posts!: IPosts;

//   constructor(private _activatedrouter: ActivatedRoute, private _postservice: PostsService) {}
//   ngOnInit(): void {
//     this.id = this._activatedrouter.snapshot.params["routes"];
//     alert(this.id)
//     this._postservice.editPosts(this.id).subscribe(posts => {
//       if(posts) {
//         this.posts = posts;
//       }
//     })
   
//   }

// }

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IPosts } from '../posts/post/IPosts';
import { PostsService } from '../posts/posts.service';

@Component({
  selector: 'app-postview',
  templateUrl: './postview.component.html',
  styleUrls: ['./postview.component.css']
})
export class PostviewComponent implements OnInit {
  id!: number;
  routes: string = "";
  posts!: IPosts;

  constructor(private _activatedrouter: ActivatedRoute, private _postservice: PostsService) { }

  ngOnInit(): void {
    this.id = this._activatedrouter.snapshot.params["routes"];
    alert(this.id);
    this._postservice.editPosts(this.id).subscribe((posts: any) => {
      if(posts) {
        this.posts = posts
      }
    })
  }
  

}

