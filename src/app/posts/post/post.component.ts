import { Component, OnInit } from '@angular/core';
import { PostsService } from '../posts.service';
import { IPosts } from './IPosts';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
 posts!: IPosts[]
 isLoading: boolean = false;
 title!: string;
 userId!: number;
 tags!: string;
 reactions!: number;
 id: number = 0;

  constructor(private _postservice: PostsService) { }
  ngOnInit(): void {
    this.isLoading = true;
    this._postservice.getAllPosts().subscribe((posts: any) => {
      this.posts = posts.posts;
      this.isLoading = false;
    })
  }
  deletePosts(id: number): void {
    let c: any = confirm("Are you sure want to delete")
    if(c) {
      this._postservice.deletePosts(id).subscribe((res: any) => {
        let index = this.posts.findIndex(u => u.id ==id)
        this.posts.splice(index,1)
        alert("deleted successfully")
      })
    }
  }
  savePosts(f: NgForm): void {
    this._postservice.savePosts(f.value).subscribe((res: any) => {
      this.posts.push(f.value)
      f.reset()
      alert("user added sucessfully")
    })
  }
  editPosts(id: number): void {
    this._postservice.editPosts(id).subscribe((res: any) => {
      if(res) {
        this.id = res.id;
        this.title = res.title;
        this.userId = res.userId;
        this.tags = res.tags;
        this.reactions = res.reactions
      }else {
        alert("no user found")
      }
    })
  }
  updatePosts(f: NgForm): void {
    if(this.id == 0) {
      alert("user not found")
    }
    this._postservice.updatePosts(f.value, this.id).subscribe(data => {
      let index = this.posts.findIndex(u => u.id == this.id)
      this.posts[index] = data;
      f.reset()
      alert("user update successfully")
    })
  }

}
