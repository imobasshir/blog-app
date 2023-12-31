import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/services/blog.service';
import { BlogComponent } from '../blog/blog.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private blogDetail: BlogService,
    private blog: BlogComponent
  ) { }

  blogDt: any
  ngOnInit(): void {
    this.blogDetail.getAllBlogs().subscribe(
      res => { this.blogDt = res }
    )
  }
  getBlogDetails() {
  }

  openBlog(id: any) {
    this.blog.openBlog(id);
  }

  //  title !: string 
  //   topics !:string
  //   content !:string
  //   refrences !: string
  //   author !: string
  //   action !: string
  //   id!:number 

}
